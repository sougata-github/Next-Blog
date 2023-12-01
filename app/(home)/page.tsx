import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <section className="flex-center max-w-full flex-col px-6 py-40 text-center sm:px-20 ">
      <h1 className="text-2xl font-bold md:text-4xl">
        Welcome to Next Blog ⚡
      </h1>
      <p className="text-md font-semmibold mt-10 leading-6 sm:text-lg sm:leading-8">
        Craft and share your thoughts effortlessly with Next Blog – where
        lightning-fast blogs meet seamless posting with the power of NextJS.
        Start blogging today!
      </p>
      <div className="mt-10 ">
        <Link href="/create-post">
          <Button
            variant="outline"
            className="rounded-[5px] bg-orange-500 py-6 text-white "
          >
            Get Started
          </Button>
        </Link>
      </div>
    </section>
  );
}
