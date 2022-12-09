const mongoose = require("mongoose");

const PsychologistsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const PsychologistsModel = mongoose.model("psychologists", PsychologistsSchema);

module.exports = PsychologistsModel;
