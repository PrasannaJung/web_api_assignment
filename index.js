require("dotenv").config();
const express = require("express");
const app = express();
const connectDb = require("./db/connectDb");
const userRoutes = require("./routes/userRoutes");
const reservationRoutes = require("./routes/reservationRoutes");
const appointmentRoutes = require("./routes/appointmentRoutes");

app.use(express.json());

// using various routes for different purposes
app.use("/api/reservation", reservationRoutes);
app.use("/api/user", userRoutes);
app.use("/api/add-appointment", appointmentRoutes);

connectDb();
app.listen(process.env.PORT, () => {
  console.log(`Server started on ${process.env.PORT}`);
});
