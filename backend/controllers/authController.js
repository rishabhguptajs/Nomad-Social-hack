import userModel from "../models/userModel.js";
import { hashedPassword } from "../helpers/authHelper.js";

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
