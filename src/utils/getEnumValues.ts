export const getEnumValues = (enumObject: any): string[] => Object.keys(enumObject).map(key => enumObject[key]) as string[];
