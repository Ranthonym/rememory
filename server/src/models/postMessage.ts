import { Schema, model } from "mongoose";

// typescript definitions for possible future refactoring
// interface Post {
//   title: string;
//   message: string;
//   creator: string;
//   tags: string[];
//   selectedfile: string;
//   likeCount: {
//     type: Number;
//     default: 0;
//   };
//   createdAt: {
//     type: Date;
//     default: Date;
//   };
// }

const postSchema = new Schema({
  title: String,
  message: String,
  author: String,
  tags: [String],
  selectedFile: String,
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date,
  },
});

const PostMessage = model("PostMessage", postSchema);

export default PostMessage;
