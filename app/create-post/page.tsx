import Post from "@/components/Post";
import React from "react";

const Page = () => {
  return (
    <section className="flex max-w-full flex-col px-10 py-10 sm:px-6 ">
      <h1 className="text-3xl font-bold md:text-4xl">Create a Post</h1>
      <Post />
    </section>
  );
};

export default Page;
