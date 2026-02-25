import * as Post from "../models/post-model.js";
import * as Comment from "../models/comment-model.js";

export const getAllPosts = async (req, res) => {
  try {
    const { rows } = await Post.getAllPosts();
    console.log(rows);
    res.status(200).json(rows);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch all posts" });
  }
};

export const getPost = async (req, res) => {
  const postId = req.params.postId;
  try {
    const { rows } = await Post.getPost(postId);
    if (rows.length === 0) {
      return res
        .status(404)
        .json({ error: "No post with postId of " + postId });
    }
    res.status(200).json(rows[0]);
  } catch (err) {
    res.status(500).json({
      error: "Failed to fetch post with postId of " + postId,
    });
  }
};

export const getPostComments = async (req, res) => {
  const postId = req.params.postId;
  try {
    const { rows: postRows } = await Post.getPost(postId);
    if (postRows.length === 0) {
      return res.status(404).json({
        error: "Post with postId " + postId + " does not exist",
      });
    }
    const { rows: comments } = await Comment.getPostComments(postId);
    res.status(200).json(comments);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({
      error: "Failed to fetch comments for post with postId of " + postId,
      details: err.message,
    });
  }
};

export const searchPost = async (req, res) => {
  const text = req.params.text;
  try {
    const { rows: postRows } = Post.searchPost(text);
    if (postRows.length === 0) {
      res.status(404).json({ error: "No posts found :(" });
    }
    res.status(200).json(postRows);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Failed to search for posts" });
  }
};
