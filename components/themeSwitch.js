"use client";

import { useTheme } from "next-themes";
import { SunIcon } from "@heroicons/react/24/outline";

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div className="inline-flex items-center">
      <SunIcon className="w-4 h-4 mr-2" />
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
