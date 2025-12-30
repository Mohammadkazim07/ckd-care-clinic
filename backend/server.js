const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

/* =========================
   ROUTE IMPORTS
   ========================= */
const appointmentRoutes = require("./routes/appointmentRoutes");
const serviceAppointmentRoutes = require("./routes/serviceAppointmentRoutes");
const adminRoutes = require("./routes/adminRoutes");

const app = express();

/* =========================
   MIDDLEWARE
   ========================= */
app.use(
  cors({
    origin: "*", // free deployment safe
    credentials: true,
  })
);

app.use(express.json());

/* =========================
   DATABASE CONNECTION
   ========================= */
const PORT = process.env.PORT || 5000;

// 🔑 Connect FIRST, then start server
mongoose
  .connect(process.env.MONGO_URI, {
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000,
  })
  .then(() => {
    console.log("MongoDB Connected ✅");

    /* =========================
       ROUTES
       ========================= */

    // Doctor / Patient Appointments
    app.use("/api/appointments", appointmentRoutes);

    // Service Appointments
    app.use("/api/service-appointments", serviceAppointmentRoutes);

    // Admin Authentication
    app.use("/api/admin", adminRoutes);

    /* =========================
       SERVER
       ========================= */
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection failed ❌");
    console.error(err.message);
  });
