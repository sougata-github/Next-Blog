"use server";

import Post from "@/database/post.model";
import { connectToDatabase } from "../mongoose";
import { revalidatePath } from "next/cache";

export async function getAllPosts() {
  try {
    connectToDatabase();

    const posts = await Post.find({}).sort({ createdAt: -1 });

    return posts;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getPostById(params: getPostByIdParams) {
  try {
    connectToDatabase();
    const { postId } = params;

    const post = await Post.findById(postId);

    if (!post) {
      throw new Error(`Post not found`);
    }
    return post;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function createPost(params: createPostParams) {
  try {
    connectToDatabase();

    const { author, title, content, path } = params;

    await Post.create({
      author,
      title,
      content,
    });

    revalidatePath(path);
  } catch (error) {
    console.log(error);
    throw error;
  }
}
