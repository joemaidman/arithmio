const REGEX_ALPHA_CHAR = /^[a-zA-Z]+$/;

export const isAlphaChar = (string: string): boolean => REGEX_ALPHA_CHAR.test((string));
