// 80. Use `toFixed()` to format a number using fixed-point notation.
const pi = Math.PI
console.log("80. pi.toFixed(2):", pi.toFixed(2))

// 81. Create a new Date object and use various get methods to extract year, month, day, etc.
const currentDate = new Date()
console.log("81. Year:", currentDate.getFullYear())
console.log("81. Month:", currentDate.getMonth() + 1) // Months are zero-indexed
console.log("81. Day:", currentDate.getDate())
console.log("81. Hours:", currentDate.getHours())
console.log("81. Minutes:", currentDate.getMinutes())

// 82. Use `toISOString()` and `toLocaleString()` to format a date in different ways.
console.log("82. ISO String:", currentDate.toISOString())
console.log("82. Locale String:", currentDate.toLocaleString())

// 83. Calculate the difference between two dates in days.
const date1 = new Date("2023-01-01")
const date2 = new Date("2023-12-31")
const diffTime = Math.abs(date2 - date1)
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
console.log("83. Difference in days:", diffDays)

// 84. Create a function to add a specific number of days to a given date.
function addDays(date, days) {
  const result = new Date(date)
  result.setDate(result.getDate() + days)
  return result
}
console.log("84. Date after adding 7 days:", addDays(new Date(), 7))

// 85. Use `getTimezoneOffset()` to get the time zone difference for your locale in minutes.
const timezoneOffset = new Date().getTimezoneOffset()
console.log("85. Timezone offset in minutes:", timezoneOffset)
