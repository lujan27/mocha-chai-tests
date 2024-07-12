/*
Sum Arrays

DESCRIPTION:
Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

Examples
Input: [1, 5.2, 4, 0, -1]
Output: 9.2

Input: []
Output: 0

Input: [-2.398]
Output: -2.398

Assumptions
You can assume that you are only given numbers.
You cannot assume the size of the array.
You can assume that you do get an array and if the array is empty, return 0.
What We're Testing
We're testing basic loops and math operations. This is for beginners who are just learning loops and math operations.
Advanced users may find this extremely easy and can easily write this in one line.*/

const sum = function (numbers: number[]) {
  let total: number = 0;

  for (let i = 0; i <= numbers.length; i++) {
    if (numbers.length == 0) {
      total = 0;
    }

    if (numbers[i] != undefined) {
      total = total + numbers[i];
    }
  }

  return total;
};

//console.log(sum([1, 5.2, 4, 0, -1]));

const sumTest = sum([1, 5.2, 4, 0, -1]);

/*
Opposites Attract

DESCRIPTION:
Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.
*/

const lovefunc = function (flower1: number, flower2: number) {
  if (flower1 % 2 == 0 && flower2 % 2 != 0) {
    return true;
  } else if (flower1 % 2 != 0 && flower2 % 2 == 0) {
    return true;
  } else {
    return false;
  }
};

export { sum, lovefunc, sumTest };
