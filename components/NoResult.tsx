import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const NoResult = () => {
  return (
    <div className="mt-6 flex flex-col px-5 py-5 text-center">
      <p className="text-md">No posts yet!!!</p>
      <Link href="/create-post">
        <p className="text-md mt-5 text-orange-500">Create a Post</p>
      </Link>
    </div>
  );
};

export default NoResult;
