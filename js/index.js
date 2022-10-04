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

const testNumbers = [
  {
    value1: 1,
    value2: 1,
    result: true,
  },
  {
    value1: NaN,
    value2: NaN,
    result: false,
  },
  {
    value1: 0,
    value2: -0,
    result: true,
  },
  {
    value1: -0,
    value2: 0,
    result: true,
  },
  {
    value1: 1,
    value2: "1",
    result: false,
  },
  {
    value1: true,
    value2: false,
    result: false,
  },
  {
    value1: false,
    value2: false,
    result: true,
  },
  {
    value1: "water",
    value2: "oil",
    result: false,
  },
];

const checkStrictEquals = () => {
  testNumbers.forEach((test) => {
    console.log(
      `The equality of ${test.value1} and ${test.value2} is ${test.result} and function says : ${strictEquals(test.value1, test.value2)}`
    );
  });
};

checkStrictEquals();
