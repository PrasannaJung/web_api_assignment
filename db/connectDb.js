const mongoose = require("mongoose");

async function connectDb() {
  const DATABASE_URL = process.env.DATABASE_URL;
  mongoose.connect(DATABASE_URL).then(() => {
    console.log("Database connected");
  });
}

module.exports = connectDb;
