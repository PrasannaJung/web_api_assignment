const Appointment = require("../models/appointmentModel");

const createAppointment = async (req, res) => {
  const { date, time } = req.body;

  if (!date) {
    return res.json({ message: "Please provide date" });
  }

  if (!time) {
    return res.json({ message: "Please provide time" });
  }

  if (new Date(date) < new Date()) {
    return res.json({ message: "Event date should be in future" });
  }

  if (time === "15:00") {
    return res.json({ message: "Unavailable slot" });
  }

  try {
    const newAppointment = new Appointment({ date: date, time: time });
    await newAppointment.save();
    return res.status(200).json({
      newAppointment,
      message: "Appointment created successfully",
    });
  } catch (e) {
    return res.status(500).json({ message: "Internal server error occurred" });
  }
};

module.exports = { createAppointment };
