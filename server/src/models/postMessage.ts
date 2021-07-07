import { Schema, model, connect } from "mongoose";

interface Post {
  title: string;
  message: string;
  creator: string;
  tags: string[];
  selectedfile: string;
  likeCount: {
    type: Number;
    default: 0;
  };
  createdAt: {
    type: Date;
    default: Date;
  };
}

const postSchema = new Schema<Post>({
  title: String,
  message: String,
  creator: String,
  tags: [String],
  selectedFile: String,
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const PostMessage = model<Post>("PostMessage", postSchema);

export default PostMessage;
