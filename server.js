if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const moragan = require("morgan");
const connectDB = require("./config/db");

// rest object
const app = express();

// Mongo DB Connection
connectDB();

//middlewares
app.use(express.json());
app.use(moragan("dev"));

// routes
app.use("/api/psychologists", require("./routes/psychologistsRouter"));

//listen port
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server started at PORT - ${process.env.PORT}`);
});
