import { Schema, model, models, Document } from "mongoose";

export interface IPost extends Document {
  author: string;
  title: string;
  content: string;
  createdAt: Date;
}

const PostSchema = new Schema({
  author: { type: String, required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Post = models.Post || model("Post", PostSchema);

export default Post;
