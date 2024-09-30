"use client";
import * as React from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { DesktopIcon, MoonIcon, SunIcon } from "@radix-ui/react-icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LightBulbIcon } from "@heroicons/react/24/outline";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const themeConstant: any = {
    light: {
      icon: <SunIcon className="h-[1.2rem] w-[1.2rem] text-foreground" />,
    },
    dark: {
      icon: <MoonIcon className="h-[1.2rem] w-[1.2rem]" />,
    },
    system: {
      icon: <DesktopIcon className="h-[1.2rem] w-[1.2rem]" />,
    },
  };

  const newLocal = theme || "light";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant="outline" className="p-2 transform duration-500">
          <LightBulbIcon className="h-4 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="rounded-xl">
        <DropdownMenuItem
          className="rounded-xl"
          onClick={() => setTheme("light")}
        >
          <SunIcon className="h-[1.2rem] w-[1.2rem]" /> Light
        </DropdownMenuItem>
        <DropdownMenuItem
          className="rounded-xl"
          onClick={() => setTheme("dark")}
        >
          <MoonIcon className="h-[1.2rem] w-[1.2rem]" /> Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          className="rounded-xl"
          onClick={() => setTheme("system")}
        >
          <DesktopIcon className="h-[1.2rem] w-[1.2rem]" /> System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
