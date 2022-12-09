const bcrypt = require("bcrypt");
const PsychologistsModel = require("../models/psychologistsModel");
const jwt = require("jsonwebtoken");
const registerController = async (req, res) => {
  try {
    const existingUser = await PsychologistsModel.findOne({
      email: req.body.email,
    });
    if (existingUser) {
      return res
        .status(200)
        .send({ message: "User Already exists", success: false });
    }
    const password = req.body.password;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    req.body.password = hashedPassword;
    const newPsychologists = new PsychologistsModel(req.body);
    await newPsychologists.save();
    res
      .status(201)
      .send({ message: "Registration Successfull", success: true });
  } catch (err) {
    res
      .status(500)
      .send({ success: false, message: `Registration Failed ${err.message}` });
  }
};
const loginController = async (req, res) => {
  try {
    const existingUser = await PsychologistsModel.findOne({
      email: req.body.email,
    });

    if (!existingUser) {
      res.status(200).send({ messgae: "User not Found!", success: false });
    }

    const isMatch = await bcrypt.compare(
      req.body.password,
      existingUser.password
    );

    if (!isMatch) {
      return res
        .status(200)
        .send({ message: "Invalid username or password", success: false });
    }
    const token = jwt.sign({ id: existingUser.id }, process.env.JWT_TOKEN, {
      expiresIn: "1d",
    });
    res.status(200).send({ status: "success", sucess: true, token });
  } catch (err) {
    res.status(500).send({ message: `Login failed ${err.message}` });
  }
};

module.exports = { loginController, registerController };
