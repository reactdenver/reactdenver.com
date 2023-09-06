"use client";

import { useTheme } from "next-themes";
import { SunIcon, MoonIcon, ComputerDesktopIcon } from "@heroicons/react/24/outline";
import { useState,useEffect } from "react";

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div className="inline-flex items-center">
        {theme === "system" && <ComputerDesktopIcon className="w-4 h-4 mr-2" />}
        {theme === "dark" && <MoonIcon className="w-4 h-4 mr-2" />}
        {theme === "light" && <SunIcon className="w-4 h-4 mr-2" />}

      <select
        name="themeSwitch"
        value={theme}
        onChange={e => setTheme(e.target.value)}>
        <option value="system">System</option>
        <option value="dark">Dark</option>
        <option value="light">Light</option>
      </select>
    </div>
  );
};

export default ThemeSwitch;
