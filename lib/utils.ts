import { DEFAULT_PROMPTS } from "@/config/generation";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getRandomPrompt = () =>
  DEFAULT_PROMPTS[Math.floor(Math.random() * DEFAULT_PROMPTS.length)];
