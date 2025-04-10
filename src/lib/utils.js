import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines multiple class names and merges tailwind classes
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
} 