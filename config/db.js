const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
    });
    mongoose.set("strictQuery", true);
    console.log(`MongoDB Connected ${mongoose.connection.host}`);
  } catch (err) {
    console.log(`Mongo Error ${err.message}`);
  }
};

module.exports = connectDB;
