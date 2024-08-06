import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function moveToTop<T>(item: T, arr: T[]) {
  if(arr[0] == item) {
    return arr;
  }
  const newArray = new Array(arr.length);
  arr[0] = item;
  for(let i = 0; i < arr.length - 1; i++) {
    newArray[i + 1] = arr[i];
  }
  return newArray;
}
