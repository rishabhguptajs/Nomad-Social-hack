import userModel from "../models/userModel.js";
import { hashedPassword, comparePassword } from "../helpers/authHelper.js";
import JWT from "jsonwebtoken";

export const registerController = async (req, res) => {
  try {
    const { name, email, password, phone, address } = req.body;
    if (!name || !email || !password || !phone || !address) {
      return res.status(400).json({
        status: "failed",
        message: "All fields are required",
      });
    }
    const hashPassword = await hashedPassword(password);
    const user = await userModel.create({
      name,
      email,
      password: hashPassword,
      phone,
      address,
    });

    res.status(201).send({
      success: true,
      message: "User Registered Successfully",
      user,
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "failed",
      message: "Internal Server Error",
      error,
    });
  }
};


export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password ) {
      return res.status(400).json({
        status: "failed",
        message: "All fields are required",
      });
    }

    const user = await userModel.findOne({ email });
    console.log(user);
    if (!user) {
      return res.status(400).json({
        status: "failed",
        message: "Invalid Credentials",
      });
    };

    const isMatch = await comparePassword(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        status: "failed",
        message: "Wrong Password",
      });
    };

    const token = await JWT.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });

    res.status(200).json({
      status: "success",
      message: "User Logged In Successfully",
      token,
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "failed",
      message: "Internal Server Error",
      error,
    });
  }
}