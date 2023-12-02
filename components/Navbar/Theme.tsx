"use client";

import { useTheme } from "@/context/ThemeProvider";
import { Button } from "../ui/button";
import Image from "next/image";

const Theme = () => {
  const { mode, setMode } = useTheme();

  return (
    <>
      <Button className="px-0">
        {mode === "light" ? (
          <Image
            src="/assets/dark-mode.png"
            width={28}
            height={20}
            alt="light-mode icon"
            onClick={() => {
              localStorage.theme = "dark";
              setMode("dark");
            }}
          />
        ) : (
          <Image
            src="/assets/light-mode.png"
            width={32}
            height={20}
            alt="light-mode icon"
            onClick={() => {
              localStorage.theme = "light";
              setMode("light");
            }}
          />
        )}
      </Button>
    </>
  );
};

export default Theme;
