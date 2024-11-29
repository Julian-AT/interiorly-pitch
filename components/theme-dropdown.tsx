"use client";

import React, { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTheme } from "next-themes";
import { Moon02Icon, Sun03Icon } from "hugeicons-react";

const ThemeDropdown = () => {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  if (!theme) return null;

  return (
    <Select onValueChange={(v) => setTheme(v)} defaultValue={theme}>
      <SelectTrigger className="m-0 w-max border-none bg-transparent p-0 focus:outline-none focus:ring-0 focus:ring-offset-0">
        <SelectValue>
          <div className="flex justify-center gap-1.5 px-1 text-muted-foreground">
            {theme === "dark" ? (
              <Moon02Icon className="h-5 w-5" />
            ) : (
              <Sun03Icon className="h-5 w-5" />
            )}
            {theme === "dark" ? "Dark" : "Light"}
          </div>
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="dark" className="flex gap-1.5">
            <div className="flex justify-center gap-1.5 px-1 text-muted-foreground">
              <Moon02Icon className="h-5 w-5" />
              Dark
            </div>
          </SelectItem>
          <SelectItem value="light" className="flex gap-1.5">
            <div className="flex justify-center gap-1.5 px-1 text-muted-foreground">
              <Sun03Icon className="h-5 w-5" />
              Light
            </div>
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default ThemeDropdown;
