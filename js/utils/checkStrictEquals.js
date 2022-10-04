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

export default checkStrictEquals;
