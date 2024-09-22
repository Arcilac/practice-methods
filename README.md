# 100 practical JavaScript exercises explained
## Array Methods (exercises 1-30):

1. `map()` creates a new array with the results of calling a provided function on every element in the array.
2. `filter()` creates a new array with all elements that pass the test implemented by the provided function.
3. `reduce()` executes a reducer function on each element of the array, resulting in a single output value.
4. `forEach()` executes a provided function once for each array element.
5. `find()` returns the value of the first element in the array that satisfies the provided testing function.
6. `findIndex()` returns the index of the first element in the array that satisfies the provided testing function.
7. `some()` tests whether at least one element in the array passes the test implemented by the provided function.
8. `every()` tests whether all elements in the array pass the test implemented by the provided function.
9. `includes()` determines whether an array includes a certain value among its entries.
10. `indexOf()` returns the first index at which a given element can be found in the array, or -1 if it is not present.
11. `lastIndexOf()` returns the last index at which a given element can be found in the array, or -1 if it is not present.
12. `slice()` returns a shallow copy of a portion of an array into a new array object.
13. `splice()` changes the contents of an array by removing or replacing existing elements and/or adding new elements.
14. `concat()` merges two or more arrays.
15. `join()` creates and returns a new string by concatenating all of the elements in an array.
16. `push()` and `pop()` add/remove elements to/from the end of an array.
17. `shift()` and `unshift()` remove/add elements from/to the beginning of an array.
18. `sort()` sorts the elements of an array in place and returns the sorted array.
19. `reverse()` reverses an array in place and returns the reference to the same array.
20. `flat()` creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
21. `flatMap()` first maps each element using a mapping function, then flattens the result into a new array.
22. `Array.from()` creates a new Array instance from an array-like or iterable object.
23. `Array.isArray()` determines whether the passed value is an Array.
24. `Array.of()` creates a new Array instance with a variable number of arguments, regardless of number or types of the arguments.
25. `fill()` fills all the elements of an array from a start index to an end index with a static value.
26. `entries()` returns a new Array Iterator object that contains the key/value pairs for each index in the array.
27. `keys()` returns a new Array Iterator that contains the keys for each index in the array.
28. `values()` returns a new Array Iterator object that contains the values for each index in the array.
29. `copyWithin()` shallow copies part of an array to another location in the same array and returns it without modifying its length.
30. `reduceRight()` applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value.

## Object Methods (exercises 31-50):

31. `Object.keys()` returns an array of a given object's own enumerable property names.
32. `Object.values()` returns an array of a given object's own enumerable property values.
33. `Object.entries()` returns an array of a given object's own enumerable string-keyed property [key, value] pairs.
34. `Object.assign()` copies the values of all enumerable own properties from one or more source objects to a target object.
35. `Object.create()` creates a new object with the specified prototype object and properties.
36. `Object.freeze()` freezes an object: other code can't delete or change any properties.
37. `Object.seal()` seals an object, preventing new properties from being added to it and marking all existing properties as non-configurable.
38. `Object.is()` determines whether two values are the same value.
39. `hasOwnProperty()` returns a boolean indicating whether the object has the specified property as its own property.
40. `Object.defineProperty()` adds the named property described by a given descriptor to an object.
41. `Object.getOwnPropertyDescriptor()` returns a property descriptor for an own property of an object.
42. `Object.getOwnPropertyNames()` returns an array of all properties (including non-enumerable properties) found directly in a given object.
43. `Object.getPrototypeOf()` returns the prototype of the specified object.
44. `Object.setPrototypeOf()` sets the prototype of a specified object to another object.
45. `Object.preventExtensions()` prevents new properties from ever being added to an object.
46. `Object.isExtensible()` determines if an object is extensible.
47. `Object.isFrozen()` determines if an object is frozen.
48. `Object.isSealed()` determines if an object is sealed.
49. `Object.fromEntries()` transforms a list of key-value pairs into an object.
50. Deep clone an object using a combination of `JSON.parse()` and `JSON.stringify()`.

## String Methods (exercises 51-70):

51. `split()` splits a String object into an array of strings by separating the string into substrings.
52. `replace()` returns a new string with some or all matches of a pattern replaced by a replacement.
53. `replaceAll()` returns a new string with all matches of a pattern replaced by a replacement.
54. `substring()` returns the part of the string between the start and end indexes, or to the end of the string.
55. `slice()` extracts a section of a string and returns it as a new string, without modifying the original string.
56. `toLowerCase()` and `toUpperCase()` return the calling string value converted to lowercase or uppercase.
57. `trim()`, `trimStart()`, and `trimEnd()` remove whitespace from both ends, the beginning, or the end of a string.
58. `padStart()` and `padEnd()` pad the current string with another string until the resulting string reaches the given length.
59. `startsWith()` and `endsWith()` determine whether a string begins or ends with the characters of a specified string.
60. `includes()` determines whether one string may be found within another string.
61. `charAt()` returns the character at the specified index in a string.
62. `charCodeAt()` returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.
63. `match()` retrieves the result of matching a string against a regular expression.
64. `search()` executes a search for a match between a regular expression and this String object.
65. `repeat()` constructs and returns a new string which contains the specified number of copies of the string.
66. `concat()` concatenates the string arguments to the calling string and returns a new string.
67. `localeCompare()` returns a number indicating whether a reference string comes before or after or is the same as the given string in sort order.
68. `normalize()` returns the Unicode Normalization Form of the string.
69. `matchAll()` returns an iterator of all results matching a string against a regular expression.
70. Create a function that capitalizes the first letter of each word in a sentence using string methods.

## Math and Number Methods (exercises 71-80):

71. Use `Math.round()`, `Math.floor()`, and `Math.ceil()` to round numbers in different ways.
72. Use `Math.max()` and `Math.min()` to find the maximum and minimum values in a set of numbers.
73. Use `Math.random()` to generate random numbers within a specific range.
74. Use `Math.pow()` and `Math.sqrt()` to calculate powers and square roots.
75. Use `Number.parseInt()` and `Number.parseFloat()` to parse strings into numbers.
76. Use `Number.isInteger()` and `Number.isNaN()` to check for integer and NaN values.
77. Use `Math.abs()` to get the absolute value of a number.
78. Use `Math.sign()` to determine the sign of a number.
79. Use `Math.trunc()` to get the integer part of a number by removing any fractional digits.
80. Use `toFixed()` to format a number using fixed-point notation.

## Date Methods (exercises 81-85):

81. Create a new Date object and use various get methods to extract year, month, day, etc.
82. Use `toISOString()` and `toLocaleString()` to format a date in different ways.
83. Calculate the difference between two dates in days.
84. Create a function to add a specific number of days to a given date.
85. Use `getTimezoneOffset()` to get the time zone difference for your locale in minutes.

## Promises and Async/Await (exercises 86-90):

86. Create a Promise that resolves after a random time and use `.then()` to handle it.
87. Use `Promise.all()` to handle multiple promises concurrently.
88. Create an async function that uses `await` to handle a promise, and use `try/catch` for error handling.
89. Use `Promise.race()` to handle multiple promises and get the result of the fastest one.
90. Implement a retry mechanism using async/await for a function that might fail.

## Regular Expressions (exercises 91-95):

91. Use regex to validate an email address.
92. Use regex to extract all numbers from a string.
93. Use regex with `replace()` to swap the order of first and last names in a string.
94. Use regex to validate a password (must contain at least one uppercase, one lowercase, one number, and be at least 8 characters long).
95. Use regex to remove all HTML tags from a string.

## JSON Methods (exercises 96-97):

96. Use `JSON.parse()` to convert a JSON string into a JavaScript object.
97. Use `JSON.stringify()` to convert a JavaScript object into a JSON string, including handling of circular references.

## Timers and URL Encoding (exercises 98-100):

98. Use `setTimeout()` and `clearTimeout()` to create a countdown timer.
99. Use `setInterval()` and `clearInterval()` to create a stopwatch.
100. Use `encodeURIComponent()` and `decodeURIComponent()` to encode and decode a URL containing special characters.
