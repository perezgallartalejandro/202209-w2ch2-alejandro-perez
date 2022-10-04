const checkIfNaN = (number1, number2) => {
  return Number.isNaN(number1) && Number.isNaN(number2);
};

const typeOf = "number";

const checkIfNumber = (number1, number2) => {
  return (
    Object.is(typeof number1, typeOf) && Object.is(typeof number2, typeOf)
  );
};

const cero = 0;
const minuscero = -0;

const checkIfCeros = (number1, number2) => {
  if (Object.is(number1, cero) && Object.is(number2, minuscero)) {
    return true;
  }
  if (Object.is(number1, minuscero) && Object.is(number2, cero)) {
    return true;
  }
  return false;
};

export { checkIfNaN };
export { checkIfNumber };
export { checkIfCeros };
