const mongoose = require("mongoose");
const { Schema } = mongoose;
const appointmentSchema = new Schema({
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
});

const Appointment = mongoose.model("appointments", appointmentSchema);

module.exports = Appointment;
