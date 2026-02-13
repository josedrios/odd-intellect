import * as User from "../models/user-model.js";

export const getAllUsers = async (req, res) => {
  try {
    const { rows } = await User.getAllUsers();
    res.status(200).json(rows);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch all users" });
  }
};

export const getUser = async (req, res) => {
  const userId = req.params.userId;
  try {
    const { rows } = await User.getUser(userId);
    if (rows.length === 0) {
      return res
        .status(404)
        .json({ error: "No user found with userId of " + userId });
    }
    res.status(200).json(rows[0]);
  } catch (err) {
    res
      .status(500)
      .json({ error: "Failed to user with the userId of " + userId });
  }
};

export const getUserComments = async (req, res) => {
  const userId = req.params.userId;
  try {
    const { rows: userRows } = await User.getUser(userId);
    if (userRows === 0) {
      return res
        .status(404)
        .json({ error: "No user found with userId of " + userId });
    }
    const { rows: commentRows } = await User.getUserComments(userId);
    res.status(200).json(commentRows);
  } catch (err) {
    res.status(500).json({
      error: "Failed to fetch user comments for user of userId " + userId,
    });
  }
};

export const createUser = async (req, res) => {
  const { username } = req.body;
  try {
    const results = await User.createUser(username);
    res.status(200).json(results);
  } catch (err) {
    res.status(500).json({ error: "Failed to create user" });
  }
};

export const deleteUser = async (req, res) => {
  const userId = req.params.userId;
  try {
    const { rows: userRows } = await User.getUser(userId);
    if (userRows.length === 0) {
      return res
        .status(404)
        .json({ error: "No user found with user id of " + userId });
    }
    const { result } = await User.deleteUser(userId);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({
      error: "Failed to delete user with user id of " + userId,
    });
  }
};
