import * as User from "../models/userModel.js";

export const getAllUsers = async (req, res) => {
  const { rows } = await User.getAllUsers();
  res.json(rows);
};
