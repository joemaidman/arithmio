export const round = (number: number, digits: number = 0) => {
  const multiplicator = Math.pow(10, digits);
  const parsednumber = parseFloat((number * multiplicator).toFixed(11));
  return Math.round(parsednumber) / multiplicator;
};
