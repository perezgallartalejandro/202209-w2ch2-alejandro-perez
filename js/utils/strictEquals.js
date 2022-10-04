import { checkIfNaN } from "./checkNumbers.js";
import { checkIfNumber } from "./checkNumbers.js";
import { checkIfCeros } from "./checkNumbers.js";


const strictEquals = (number1, number2) => {
  if (checkIfNaN(number1, number2)) {
    if (checkIfNumber(number1, number2)) {
      return false;
    }
    if (checkIfCeros(number1, number2)) {
      return true;
    }
  }
  return Object.is(number1, number2);
};

export default strictEquals;
