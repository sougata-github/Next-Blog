"use server";

import Post from "@/database/post.model";
import { connectToDatabase } from "../mongoose";
import { revalidatePath } from "next/cache";

interface createPostParams {
  author: string;
  title: string;
  content: string;
  path: string;
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
