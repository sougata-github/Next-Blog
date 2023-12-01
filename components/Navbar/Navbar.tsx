"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <nav className="flex justify-between bg-zinc-100 px-8 py-5 md:px-20">
      <Link href="/" className="flex-center">
        <p className="text-center text-[20px] font-semibold">
          NEXT <span className="font-extrabold text-orange-400">BLOG</span>
        </p>
      </Link>
      <ul className="flex-center gap-5 px-8 max-sm:hidden">
        <Button>
          <Image
            src="/assets/dark-mode.png"
            width={20}
            height={20}
            alt="light-mode icon"
          />
        </Button>
        <Link href="/all-posts" className="text-gray-500 hover:text-gray-700">
          Posts
        </Link>
        <Link href="/create-post" className="text-gray-500 hover:text-gray-700">
          Create Post
        </Link>
      </ul>
      <MobileNav />
    </nav>
  );
};

export default Navbar;
