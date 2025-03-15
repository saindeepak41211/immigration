const mongoose = require("mongoose");
const db = "mongodb://localhost:27017/database1"; // Replace database1 with your DB name

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB is Connected Locally...");
  } catch (err) {
    console.error("MongoDB Connection Error:", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
