const mongoose = require("mongoose");

const serviceAppointmentSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    appointmentDate: { type: String, required: true },
    symptoms: { type: String },
    serviceType: { type: String, required: true },
    status: { type: String, default: "Pending" },
  },
  { timestamps: true }
);

module.exports = mongoose.model(
  "ServiceAppointment",
  serviceAppointmentSchema
);
