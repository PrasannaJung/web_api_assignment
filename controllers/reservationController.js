const Reservation = require("../models/reservationModel");

const createReservation = async (req, res) => {
  const { userId, eventDate, numberOfGuests } = req.body;

  if (!userId) {
    return res.json({ message: "Please provide userId" });
  }

  if (!eventDate) {
    return res.json({ message: "Please provide event date" });
  }

  if (!numberOfGuests) {
    return res.json({ message: "Please provide number of guests" });
  }

  if (new Date(eventDate) < new Date()) {
    return res.json({ message: "Event date should be in future" });
  }

  try {
    const newReservation = new Reservation({
      userId: userId,
      eventDate: eventDate,
      numberOfGuests: numberOfGuests,
    });
    await newReservation.save();
    return res.json({
      newReservation,
      message: "Reservation created successfully",
    });
  } catch (e) {
    return res.json({ message: "Internal server error occurred" });
  }
};

module.exports = { createReservation };
