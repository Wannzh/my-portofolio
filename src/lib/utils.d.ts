type ClassValue = string | undefined | null | false | { [key: string]: boolean };

export function cn(...inputs: ClassValue[]): string;
