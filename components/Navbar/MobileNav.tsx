"use client";

import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import Theme from "./Theme";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Image
          src="/assets/menu.png"
          width={26}
          height={8}
          alt="menu"
          className="inline-block h-6 cursor-pointer sm:hidden"
        />
      </SheetTrigger>
      <SheetContent
        side="left"
        className="hide-scrollbar overflow-hidden border-none bg-zinc-100 dark:bg-black"
      >
        <SheetTitle className="flex w-full flex-col justify-start px-2">
          <Link href="/">
            <p className="text-left  text-[28px] font-semibold">
              NEXT <span className="font-extrabold text-orange-400">BLOG</span>
            </p>
          </Link>
          <div className="mt-4 h-[0.2px] w-full bg-zinc-300" />
        </SheetTitle>
        <nav className="px-2 py-10">
          <ul className="flex flex-col items-start gap-6 text-[18px]">
            <Theme />
            <Link href="/all-posts" className="text-gray-500 hover:font-bold">
              Posts
            </Link>
            <Link href="/create-post" className="text-gray-500 hover:font-bold">
              <Button className="primary-gradient rounded-[5px] text-white ">
                Create Post
              </Button>
            </Link>
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
