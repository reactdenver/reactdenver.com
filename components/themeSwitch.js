"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTheme } from "next-themes";
import { SunIcon, Cog6ToothIcon } from "@heroicons/react/24/outline";
import { MoonIcon } from "@heroicons/react/24/solid";

const ThemeSwitch = () => {
  const { resolvedTheme, setTheme } = useTheme();
  return (
    <Select
      onValueChange={(value) => setTheme(value)}
      defaultValue={resolvedTheme ? resolvedTheme : "light"}
    >
      <SelectTrigger
        className="w-[180px] text-black dark:text-white"
        aria-label="Theme Switch"
      >
        <SelectValue />
      </SelectTrigger>
      <SelectContent className="bg-white dark:bg-black text-black dark:text-white">
        <SelectItem value="light">
          <SunIcon className="w-4 h-4 mr-2 relative inline -top-0.5" /> Light
        </SelectItem>
        <SelectItem value="dark">
          <MoonIcon className="w-4 h-4 mr-2 relative inline -top-0.5" /> Dark
        </SelectItem>
        <SelectItem value="system">
          <Cog6ToothIcon className="w-4 h-4 mr-2 relative inline -top-0.5" />
          System
        </SelectItem>
      </SelectContent>
    </Select>
  );
};

export default ThemeSwitch;
