const User = require("../models/userModel");

const createUser = async (req, res) => {
  const { email, phone, name } = req.body;

  if (!email) {
    return res.json({ message: "Please provide email" });
  }

  if (!phone) {
    return res.json({ message: "Please provide phone number" });
  }

  if (!name) {
    return res.json({ message: "Please provide name" });
  }

  const oldUser = await User.findOne({ phone: phone });
  if (oldUser) {
    return res.json({ message: "User with given phone number already exists" });
  }
  try {
    const newUser = new User({ name, email, phone });
    await newUser.save();
    return res.json({ newUser, message: "Successfully created a user" });
  } catch (e) {
    return res.json({ message: "Internal server error occured" });
  }
};

module.exports = { createUser };
