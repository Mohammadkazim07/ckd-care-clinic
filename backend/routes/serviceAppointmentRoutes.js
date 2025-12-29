const express = require("express");
const router = express.Router();
const ServiceAppointment = require("../models/ServiceAppointment");

const sendEmail = require("../utils/sendEmail");
const sendSMS = require("../utils/sendSMS");

/* ===========================
   CREATE SERVICE APPOINTMENT
   =========================== */
router.post("/", async (req, res) => {
  try {
    const appointment = new ServiceAppointment({
      fullName: req.body.fullName,
      email: req.body.email,
      phone: req.body.phone,
      appointmentDate: req.body.appointmentDate,
      symptoms: req.body.symptoms,
      serviceType: req.body.serviceType,
      status: "Pending"
    });

    await appointment.save();

    res.status(201).json({
      message: "Service appointment booked successfully",
      appointment
    });
  } catch (err) {
    console.error("Save error:", err.message);
    res.status(400).json({ error: err.message });
  }
});

/* ===========================
   GET ALL SERVICE APPOINTMENTS (ADMIN)
   =========================== */
router.get("/", async (req, res) => {
  try {
    const data = await ServiceAppointment.find().sort({ createdAt: -1 });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/* ===========================
   CONFIRM SERVICE APPOINTMENT (ADMIN)
   =========================== */
router.put("/confirm/:id", async (req, res) => {
  try {
    // 1️⃣ CONFIRM FIRST
    const appointment = await ServiceAppointment.findByIdAndUpdate(
      req.params.id,
      { status: "Confirmed" },
      { new: true }
    );

    if (!appointment) {
      return res.status(404).json({ message: "Service appointment not found" });
    }

    // 2️⃣ EMAIL TO PATIENT (SAFE)
    try {
      await sendEmail(
        appointment.email,
        "Service Appointment Confirmed - CKD Care Clinic",
        `Dear ${appointment.fullName},

Your service appointment has been CONFIRMED.

Service: ${appointment.serviceType}
Date: ${appointment.appointmentDate}

Regards,
CKD Care Clinic`
      );
    } catch (err) {
      console.error("❌ Patient email failed:", err.message);
    }

    // 3️⃣ EMAIL TO DOCTOR (SAFE)
    try {
      await sendEmail(
        process.env.DOCTOR_EMAIL,
        "New Service Appointment Confirmed",
        `Patient: ${appointment.fullName}
Phone: ${appointment.phone}
Service: ${appointment.serviceType}
Date: ${appointment.appointmentDate}`
      );
    } catch (err) {
      console.error("❌ Doctor email failed:", err.message);
    }

    // 4️⃣ SMS TO PATIENT (SAFE)
    try {
      await sendSMS(
        appointment.phone,
        `CKD Care Clinic: Your ${appointment.serviceType} appointment on ${appointment.appointmentDate} is CONFIRMED.`
      );
    } catch (err) {
      console.error("❌ SMS failed:", err.message);
    }

    // 5️⃣ ALWAYS SUCCESS
    res.json({
      message: "Service appointment confirmed",
      appointment
    });

  } catch (err) {
    console.error("❌ Confirm service route error:", err.message);
    res.status(500).json({
      message: "Failed to confirm service appointment",
      error: err.message
    });
  }
});

module.exports = router;
