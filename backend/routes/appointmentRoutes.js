const express = require("express");
const router = express.Router();
const Appointment = require("../models/Appointment");

const sendEmail = require("../utils/sendEmail");
const sendSMS = require("../utils/sendSMS");

/* ===========================
   BOOK APPOINTMENT (PATIENT)
   =========================== */
router.post("/", async (req, res) => {
  try {
    const appointment = new Appointment({
      fullName: req.body.fullName,
      age: req.body.age,
      gender: req.body.gender,
      address: req.body.address,
      phone: req.body.phone,
      email: req.body.email,
      appointmentDate: req.body.appointmentDate,
      status: "Pending"
    });

    await appointment.save();

    res.status(201).json({
      message: "Appointment booked successfully",
      appointment
    });
  } catch (error) {
    res.status(400).json({
      message: "Failed to book appointment",
      error: error.message
    });
  }
});

/* ===========================
   GET ALL APPOINTMENTS (ADMIN)
   =========================== */
router.get("/", async (req, res) => {
  try {
    const appointments = await Appointment.find().sort({ createdAt: -1 });
    res.json(appointments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/* ===========================
   CONFIRM APPOINTMENT (ADMIN)
   =========================== */
router.put("/confirm/:id", async (req, res) => {
  try {
    // 1️⃣ CONFIRM APPOINTMENT FIRST
    const appointment = await Appointment.findByIdAndUpdate(
      req.params.id,
      { status: "Confirmed" },
      { new: true }
    );

    if (!appointment) {
      return res.status(404).json({ message: "Appointment not found" });
    }

    // 2️⃣ SEND EMAIL TO PATIENT (SAFE)
    try {
      await sendEmail(
        appointment.email,
        "Appointment Confirmed - CKD Care Clinic",
        `Dear ${appointment.fullName},

Your appointment scheduled on ${appointment.appointmentDate} has been CONFIRMED.

Regards,
CKD Care Clinic`
      );
    } catch (err) {
      console.error("❌ Patient email failed:", err.message);
    }

    // 3️⃣ SEND EMAIL TO DOCTOR (SAFE)
    try {
      await sendEmail(
        process.env.DOCTOR_EMAIL,
        "New Appointment Confirmed",
        `Patient Name: ${appointment.fullName}
Phone: ${appointment.phone}
Date: ${appointment.appointmentDate}`
      );
    } catch (err) {
      console.error("❌ Doctor email failed:", err.message);
    }

    // 4️⃣ SEND SMS (SAFE)
    try {
      await sendSMS(
        appointment.phone,
        `CKD Care Clinic: Your appointment on ${appointment.appointmentDate} is CONFIRMED.`
      );
    } catch (err) {
      console.error("❌ SMS failed:", err.message);
    }

    // 5️⃣ ALWAYS RETURN SUCCESS
    res.json({
      message: "Appointment confirmed",
      appointment
    });

  } catch (error) {
    console.error("❌ Confirm route error:", error.message);
    res.status(500).json({
      message: "Failed to confirm appointment",
      error: error.message
    });
  }
});

module.exports = router;
