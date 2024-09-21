// 71. Use `Math.round()`, `Math.floor()`, and `Math.ceil()` to round numbers in different ways.
const number = 3.7
console.log("71. Math.round():", Math.round(number))
console.log("71. Math.floor():", Math.floor(number))
console.log("71. Math.ceil():", Math.ceil(number))

// 72. Use `Math.max()` and `Math.min()` to find the maximum and minimum values in a set of numbers.
const numbers = [5, 2, 8, 1, 9]
console.log("72. Math.max():", Math.max(...numbers))
console.log("72. Math.min():", Math.min(...numbers))

// 73. Use `Math.random()` to generate random numbers within a specific range.
const min = 1
const max = 10
const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
console.log("73. Random number between 1 and 10:", randomNumber)

// 74. Use `Math.pow()` and `Math.sqrt()` to calculate powers and square roots.
console.log("74. Math.pow(2, 3):", Math.pow(2, 3))
console.log("74. Math.sqrt(16):", Math.sqrt(16))

// 75. Use `Number.parseInt()` and `Number.parseFloat()` to parse strings into numbers.
console.log("75. Number.parseInt('42'):", Number.parseInt("42"))
console.log("75. Number.parseFloat('3.14'):", Number.parseFloat("3.14"))

// 76. Use `Number.isInteger()` and `Number.isNaN()` to check for integer and NaN values.
console.log("76. Number.isInteger(42):", Number.isInteger(42))
console.log("76. Number.isNaN(NaN):", Number.isNaN(NaN))

// 77. Use `Math.abs()` to get the absolute value of a number.
console.log("77. Math.abs(-5):", Math.abs(-5))

// 78. Use `Math.sign()` to determine the sign of a number.
console.log("78. Math.sign(-3):", Math.sign(-3))
console.log("78. Math.sign(0):", Math.sign(0))
console.log("78. Math.sign(5):", Math.sign(5))

// 79. Use `Math.trunc()` to get the integer part of a number by removing any fractional digits.
console.log("79. Math.trunc(3.7):", Math.trunc(3.7))
