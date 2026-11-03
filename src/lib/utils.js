// Lightweight className combiner (no TS types — plain JS).
// Replaces the old utils.ts so the project stays pure JS.
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
