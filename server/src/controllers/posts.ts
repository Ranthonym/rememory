// import { mongoose } from "mongoose";
const mongoose = require("mongoose"); // this somehow fixed the mongoose module error idk
// import { RequestHandler, Request, Response } from "express";
import PostMessage from "../models/postMessage";

export const getPosts = async (req: any, res: any) => {
  const { page } = req.query;

  try {
    const LIMIT = 3;
    const startIndex = (Number(page) - 1) * LIMIT; // get the start index on every page
    const total = await PostMessage.countDocuments({});

    const posts = await PostMessage.find()
      .sort({ _id: -1 })
      .limit(LIMIT)
      .skip(startIndex);

    res.status(200).json({
      data: posts,
      currentPage: Number(page),
      numberOfPages: Math.ceil(total / LIMIT),
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getPost = async (req: any, res: any) => {
  const { id } = req.params;

  try {
    const post = await PostMessage.findById(id);

    res.status(200).json(post);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getPostsBySearch = async (req: any, res: any) => {
  const { searchQuery, tags } = req.query;

  try {
    const title = new RegExp(searchQuery, "i");

    const posts = await PostMessage.find({
      $or: [{ title: title }, { tags: { $in: tags.split(",") } }],
    });

    res.status(200).json({ data: posts });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPost = async (req: any, res: any) => {
  const post = req.body;

  const newPost = new PostMessage({
    ...post,
    author: req.userId,
    createdAt: new Date().toISOString(),
  });

  try {
    await newPost.save();

    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updatePost = async (req: any, res: any) => {
  const { id: _id } = req.params;

  const post = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No post matches requested id");

  const updatedPost = await PostMessage.findByIdAndUpdate(
    _id,
    { ...post, _id },
    {
      new: true,
    }
  );

  res.json(updatedPost);
};

export const deletePost = async (req: any, res: any) => {
  const { id: _id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No post matches requested id");

  await PostMessage.findByIdAndRemove(_id);

  res.json({ message: "Post deleted successfully" });
};

export const likePost = async (req: any, res: any) => {
  const { id: _id } = req.params;

  // use new req property created by middleware
  if (!req.userId) return res.json({ message: "Unauthorized" });

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No post matches requested id");

  const post = await PostMessage.findById(_id);

  const index = post.likes.findIndex((id: any) => id === String(req.userId));

  if (index === -1) {
    // like post
    post.likes.push(req.userId);
  } else {
    //dislike post
    post.likes = post.likes.filter((id: any) => id !== String(req.userId));
  }

  const updatedPost = await PostMessage.findByIdAndUpdate(_id, post, {
    new: true,
  });

  res.json(updatedPost);
};
