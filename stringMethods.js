// 51. Use `split()` to convert a string into an array of substrings.
const sentence = "Hello world! How are you?"
const words = sentence.split(" ")
console.log("51. Split result:", words)

// 52. Use `replace()` to replace the first occurrence of a substring in a string.
const originalString = "The quick brown fox jumps over the lazy dog"
const replacedString = originalString.replace("quick", "slow")
console.log("52. Replace result:", replacedString)

// 53. Use `replaceAll()` to replace all occurrences of a substring in a string.
const multipleOccurrences = "The cat sat on the mat with another cat"
const allReplaced = multipleOccurrences.replaceAll("cat", "dog")
console.log("53. ReplaceAll result:", allReplaced)

// 54. Use `substring()` to extract characters from a string between two specified indices.
const fullString = "JavaScript is awesome"
const partString = fullString.substring(0, 10)
console.log("54. Substring result:", partString)

// 55. Use `slice()` to extract a section of a string and return it as a new string.
const sliceString = "The morning is upon us"
const slicedPart = sliceString.slice(4, 12)
console.log("55. Slice result:", slicedPart)

// 56. Use `toLowerCase()` and `toUpperCase()` to change the case of a string.
const mixedCase = "ThIs Is A mIxEd CaSe StRiNg"
console.log("56. toLowerCase result:", mixedCase.toLowerCase())
console.log("56. toUpperCase result:", mixedCase.toUpperCase())

// 57. Use `trim()`, `trimStart()`, and `trimEnd()` to remove whitespace from a string.
const spacyString = "   Trim me!   "
console.log("57. trim result:", spacyString.trim())
console.log("57. trimStart result:", spacyString.trimStart())
console.log("57. trimEnd result:", spacyString.trimEnd())

// 58. Use `padStart()` and `padEnd()` to pad a string to a certain length.
const shortString = "5"
console.log("58. padStart result:", shortString.padStart(3, "0"))
console.log("58. padEnd result:", shortString.padEnd(3, "0"))

// 59. Use `startsWith()` and `endsWith()` to check if a string starts or ends with a specific substring.
const checkString = "Hello, World!"
console.log("59. startsWith result:", checkString.startsWith("Hello"))
console.log("59. endsWith result:", checkString.endsWith("!"))

// 60. Use `includes()` to determine whether a string contains another string.
const searchString = "The quick brown fox"
console.log("60. includes result:", searchString.includes("brown"))

// 61. Use `charAt()` to get the character at a specified index in a string.
const charAtString = "JavaScript"
console.log("61. charAt result:", charAtString.charAt(4))

// 62. Use `charCodeAt()` to get the Unicode of the character at a specified index in a string.
console.log("62. charCodeAt result:", charAtString.charCodeAt(4))

// 63. Use `match()` to retrieve the result of matching a string against a regular expression.
const matchString = "The rain in Spain stays mainly in the plain"
const matchResult = matchString.match(/ain/g)
console.log("63. match result:", matchResult)

// 64. Use `search()` to execute a search for a match between a regular expression and a string.
const searchResult = matchString.search(/Spain/)
console.log("64. search result:", searchResult)

// 65. Use `repeat()` to construct and return a new string which contains the specified number of copies of the string.
const repeatString = "Ha"
console.log("65. repeat result:", repeatString.repeat(3))

// 66. Use `concat()` to concatenate two or more strings.
const str1 = "Hello"
const str2 = "World"
console.log("66. concat result:", str1.concat(" ", str2))

// 67. Use `localeCompare()` to compare two strings in the current locale.
const compareString1 = "apple"
const compareString2 = "banana"
console.log("67. localeCompare result:", compareString1.localeCompare(compareString2))

// 68. Use `normalize()` to return the Unicode Normalization Form of the string.
const normalizeString = "\u00F1" // ñ
console.log("68. normalize result:", normalizeString.normalize("NFD"))

// 69. Use `matchAll()` to retrieve all matches when matching a string against a regular expression.
const matchAllString = "test1test2"
const matchAllRegex = /t(e)(st(\d?))/g
const matchAllResult = [...matchAllString.matchAll(matchAllRegex)]
console.log("69. matchAll result:", matchAllResult)

// 70. Create a function that capitalizes the first letter of each word in a sentence using string methods.
function capitalizeWords(sentence) {
  return sentence
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
}
console.log("70. capitalizeWords result:", capitalizeWords("hello world! how are you today?"))
