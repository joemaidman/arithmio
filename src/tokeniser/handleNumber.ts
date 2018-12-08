import { HandleNumberResponse } from '../models/HandleNumberResponse';

export const handleNumber = (characters: string[], index: number, currentNextPassNumberSign: string | null): HandleNumberResponse => {

  let number: string | number = '';
  let newIndex = index;
  let nextCharacter = index + 1;
  number = number + characters[index];

  // if we haven't reached the end, check if there is another digit in this number
  if (characters[nextCharacter]) {
    // while there are more digits in this number (including decimals)
    while (isFinite(+characters[nextCharacter]) || characters[nextCharacter] === '.') {
      // add the digit or decimal point to the number
      number = number + characters[nextCharacter];
      // move to the next number
      nextCharacter++;
    }
    // set the index of the main loop to account for any digits in the current number
    newIndex = nextCharacter - 1;
  }

  // if the current number was proceeded by a sign (+/-)
  if (currentNextPassNumberSign) {
    // apply it
    number = (+`${currentNextPassNumberSign}${number}`);
  } else {
    // assign the current number
    number = +number;
  }

  return {
    number,
    newIndex
  };
};
