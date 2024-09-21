// 1. Create an array of numbers and use `map()` to square each number.
const numbers = [1, 2, 3, 4, 5]
const squaredNumbers = numbers.map((num) => num ** 2)
console.log("1. Squared numbers:", squaredNumbers)

// 2. Use `filter()` to get all even numbers from an array.
const evenNumbers = numbers.filter((num) => num % 2 === 0)
console.log("2. Even numbers:", evenNumbers)

// 3. Use `reduce()` to sum all numbers in an array.
const sum = numbers.reduce((acc, curr) => acc + curr, 0)
console.log("3. Sum of numbers:", sum)

// 4. Use `forEach()` to log each element of an array with its index.
console.log("4. forEach:")
numbers.forEach((num, index) => console.log(`Index ${index}: ${num}`))

// 5. Use `find()` to get the first number greater than 10 in an array.
const largeNumbers = [5, 12, 8, 130, 44]
const firstLarge = largeNumbers.find((num) => num > 10)
console.log("5. First number > 10:", firstLarge)

// 6. Use `findIndex()` to find the index of the first negative number in an array.
const mixedNumbers = [3, -1, 1, -3, 2, -2]
const firstNegativeIndex = mixedNumbers.findIndex((num) => num < 0)
console.log("6. Index of first negative number:", firstNegativeIndex)

// 7. Use `some()` to check if any number in an array is negative.
const hasNegative = mixedNumbers.some((num) => num < 0)
console.log("7. Has negative number:", hasNegative)

// 8. Use `every()` to check if all numbers in an array are positive.
const allPositive = numbers.every((num) => num > 0)
console.log("8. All numbers positive:", allPositive)

// 9. Use `includes()` to check if a specific element exists in an array.
const includesThree = numbers.includes(3)
console.log("9. Includes 3:", includesThree)

// 10. Use `indexOf()` to find the position of a specific element in an array.
const indexOfThree = numbers.indexOf(3)
console.log("10. Index of 3:", indexOfThree)

// 11. Use `lastIndexOf()` to find the last occurrence of an element in an array.
const repeatedNumbers = [1, 2, 3, 2, 1]
const lastIndexOfTwo = repeatedNumbers.lastIndexOf(2)
console.log("11. Last index of 2:", lastIndexOfTwo)

// 12. Use `slice()` to create a new array with a portion of an existing array.
const slicedArray = numbers.slice(1, 4)
console.log("12. Sliced array:", slicedArray)

// 13. Use `splice()` to remove elements from an array and replace them with new ones.
const splicedArray = [...numbers]
splicedArray.splice(1, 2, 6, 7)
console.log("13. Spliced array:", splicedArray)

// 14. Use `concat()` to merge two or more arrays.
const moreNumbers = [6, 7, 8]
const concatenatedArray = numbers.concat(moreNumbers)
console.log("14. Concatenated array:", concatenatedArray)

// 15. Use `join()` to create a string from an array with a specific separator.
const joinedString = numbers.join(" - ")
console.log("15. Joined string:", joinedString)

// 16. Use `push()` and `pop()` to add and remove elements from the end of an array.
const pushPopArray = [...numbers]
pushPopArray.push(6)
const poppedElement = pushPopArray.pop()
console.log("16. After push and pop:", pushPopArray, "Popped:", poppedElement)

// 17. Use `shift()` and `unshift()` to remove and add elements at the beginning of an array.
const shiftUnshiftArray = [...numbers]
shiftUnshiftArray.unshift(0)
const shiftedElement = shiftUnshiftArray.shift()
console.log("17. After unshift and shift:", shiftUnshiftArray, "Shifted:", shiftedElement)

// 18. Use `sort()` to sort an array of numbers in ascending and descending order.
const unsortedNumbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]
const ascendingSort = [...unsortedNumbers].sort((a, b) => a - b)
const descendingSort = [...unsortedNumbers].sort((a, b) => b - a)
console.log("18. Ascending:", ascendingSort, "Descending:", descendingSort)

// 19. Use `reverse()` to reverse the order of elements in an array.
const reversedArray = [...numbers].reverse()
console.log("19. Reversed array:", reversedArray)

// 20. Use `flat()` to flatten a nested array.
const nestedArray = [1, [2, 3], [4, [5, 6]]]
const flattenedArray = nestedArray.flat(2)
console.log("20. Flattened array:", flattenedArray)

// 21. Use `flatMap()` to map each element in an array and flatten the result.
const nestedNumbers = [
  [1, 2],
  [3, 4],
  [5, 6],
]
const flatMappedArray = nestedNumbers.flatMap((pair) => pair.map((num) => num * 2))
console.log("21. FlatMapped array:", flatMappedArray)

// 22. Use `Array.from()` to create an array from a string.
const stringToArray = Array.from("Hello")
console.log("22. Array from string:", stringToArray)

// 23. Use `Array.isArray()` to check if a variable is an array.
console.log("23. Is [1, 2, 3] an array?", Array.isArray([1, 2, 3]))
console.log('    Is "Hello" an array?', Array.isArray("Hello"))

// 24. Use `Array.of()` to create an array with a variable number of arguments.
const arrayOf = Array.of(1, 2, 3, 4, 5)
console.log("24. Array.of result:", arrayOf)

// 25. Use `fill()` to fill an array with a static value.
const filledArray = new Array(5).fill("A")
console.log("25. Filled array:", filledArray)

// 26. Use `entries()` to get an iterator of key/value pairs from an array.
const fruits = ["apple", "banana", "orange"]
console.log("26. Entries of fruits:")
for (let [index, value] of fruits.entries()) {
  console.log(`  ${index}: ${value}`)
}

// 27. Use `keys()` to get an iterator of keys from an array.
console.log("27. Keys of fruits:")
for (let key of fruits.keys()) {
  console.log(`  ${key}`)
}

// 28. Use `values()` to get an iterator of values from an array.
console.log("28. Values of fruits:")
for (let value of fruits.values()) {
  console.log(`  ${value}`)
}

// 29. Use `copyWithin()` to copy a portion of an array to another location in the same array.
const copyWithinArray = [1, 2, 3, 4, 5]
copyWithinArray.copyWithin(0, 3)
console.log("29. CopyWithin result:", copyWithinArray)

// 30. Use `reduceRight()` to apply a function against an accumulator from right to left.
const reduceRightArray = ["1", "2", "3", "4", "5"]
const result = reduceRightArray.reduceRight((acc, curr) => acc + curr)
console.log("30. ReduceRight result:", result)
