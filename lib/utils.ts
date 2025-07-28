import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const apiEndPoint = 'http://localhost:4400' //process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:4400'