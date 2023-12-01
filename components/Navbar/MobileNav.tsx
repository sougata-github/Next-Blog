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

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Image
          src="/assets/menu.png"
          width={26}
          height={8}
          alt="menu"
          className="inline-block cursor-pointer sm:hidden"
        />
      </SheetTrigger>
      <SheetContent
        side="left"
        className="hide-scrollbar overflow-hidden bg-white"
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
          <ul className="mt-10 flex flex-col items-start gap-10 text-[18px]">
            <Button className="px-0">
              <Image
                src="/assets/dark-mode.png"
                width={20}
                height={20}
                alt="light-mode icon"
              />
            </Button>
            <Link href="/all-posts" className="text-gray-500 hover:font-bold">
              Posts
            </Link>
            <Link href="/create-post" className="text-gray-500 hover:font-bold">
              <Button
                variant="outline"
                className="rounded-[5px] bg-orange-500 py-6  text-white"
              >
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
