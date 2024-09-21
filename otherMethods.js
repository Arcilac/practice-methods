// 86. Create a Promise that resolves after a random time and use `.then()` to handle it.
const randomPromise = new Promise((resolve) => {
  const delay = Math.floor(Math.random() * 5000) + 1000
  setTimeout(() => resolve(`Resolved after ${delay}ms`), delay)
})

console.log("86. Promise example:")
randomPromise.then((result) => console.log(result))

// 87. Use `Promise.all()` to handle multiple promises concurrently.
const promise1 = Promise.resolve(3)
const promise2 = new Promise((resolve) => setTimeout(() => resolve("foo"), 100))
const promise3 = Promise.resolve(42)

console.log("87. Promise.all() example:")
Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values)
})

// 88. Create an async function that uses await to handle a promise, and use try/catch for error handling.
async function fetchData() {
  try {
    const response = await fetch("https://api.elquetengatiendaquelaatienda/data")
    const data = await response.json()
    console.log("88. Fetched data:", data)
  } catch (error) {
    console.error("88. Error fetching data:", error)
  }
}

console.log("88. Async/await example:")
fetchData()

// 89. Use `Promise.race()` to handle multiple promises and get the result of the fastest one.
const promise4 = new Promise((resolve) => setTimeout(() => resolve("fast"), 100))
const promise5 = new Promise((resolve) => setTimeout(() => resolve("slow"), 500))

console.log("89. Promise.race() example:")
Promise.race([promise4, promise5]).then((result) => {
  console.log(result)
})

// 90. Implement a retry mechanism using async/await for a function that might fail.
async function retryOperation() {
  for (let i = 0; i < 3; i++) {
    try {
      // Simulating an operation that might fail
      const result = await new Promise((resolve, reject) => {
        if (Math.random() < 0.7) reject("Operation failed")
        else resolve("Operation succeeded")
      })
      console.log("90. Retry result:", result)
      return
    } catch (error) {
      console.log("90. Attempt failed, retrying...")
    }
  }
  console.log("90. All retry attempts failed")
}

console.log("90. Retry mechanism example:")
retryOperation()

// 91. Use regex to validate an email address.
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return regex.test(email)
}

console.log("91. Email validation:", validateEmail("test@example.com"))

// 92. Use regex to extract all numbers from a string.
function extractNumbers(str) {
  return str.match(/\d+/g)
}

console.log("92. Extracted numbers:", extractNumbers("There are 123 apples and 456 oranges"))

// 93. Use regex with replace() to swap the order of first and last names in a string.
function swapNames(name) {
  return name.replace(/^(\w+)\s(\w+)$/, "$2 $1")
}

console.log("93. Swapped names:", swapNames("John Doe"))

// 94. Use regex to validate a password (must contain at least one uppercase, one lowercase, one number, and be at least 8 characters long).
function validatePassword(password) {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/
  return regex.test(password)
}

console.log("94. Password validation:", validatePassword("Pass123word"))

// 95. Use regex to remove all HTML tags from a string.
function removeHTMLTags(str) {
  return str.replace(/<[^>]*>/g, "")
}

console.log("95. HTML tags removed:", removeHTMLTags("<p>Hello <b>World</b></p>"))

// 96. Use `JSON.parse()` to convert a JSON string into a JavaScript object.
const jsonString = '{"name":"John", "age":30, "city":"New York"}'
const parsedObject = JSON.parse(jsonString)

console.log("96. Parsed JSON object:", parsedObject)

// 97. Use `JSON.stringify()` to convert a JavaScript object into a JSON string, including handling of circular references.
const circularObj = { name: "Circular" }
circularObj.self = circularObj

function stringifyCircular(obj) {
  const seen = new WeakSet()
  return JSON.stringify(obj, (key, value) => {
    if (typeof value === "object" && value !== null) {
      if (seen.has(value)) {
        return "[Circular]"
      }
      seen.add(value)
    }
    return value
  })
}

console.log("97. Stringified object with circular reference:", stringifyCircular(circularObj))
// 98. Use `setTimeout()` and `clearTimeout()` to create a countdown timer.
function countdownTimer(seconds) {
  let remainingSeconds = seconds

  const timer = setInterval(() => {
    console.log(`98. Countdown: ${remainingSeconds} seconds remaining`)
    remainingSeconds--

    if (remainingSeconds < 0) {
      clearInterval(timer)
      console.log("98. Countdown finished!")
    }
  }, 1000)

  // Example of using clearTimeout (though we're using setInterval here)
  // setTimeout(() => clearInterval(timer), (seconds + 1) * 1000);
}

console.log("98. Starting 5-second countdown:")
countdownTimer(5)

// 99. Use `setInterval()` and `clearInterval()` to create a stopwatch.
function stopwatch() {
  let seconds = 0
  let intervalId

  function start() {
    intervalId = setInterval(() => {
      seconds++
      console.log(`99. Stopwatch: ${seconds} seconds`)
    }, 1000)
  }

  function stop() {
    clearInterval(intervalId)
    console.log(`99. Stopwatch stopped at ${seconds} seconds`)
  }

  return { start, stop }
}

console.log("99. Starting stopwatch for 5 seconds:")
const watch = stopwatch()
watch.start()
setTimeout(() => watch.stop(), 5000)

// 100. Use `encodeURIComponent()` and `decodeURIComponent()` to encode and decode a URL containing special characters.
const originalURL = "https://example.com/search?q=yanose"
const encodedURL = encodeURIComponent(originalURL)
const decodedURL = decodeURIComponent(encodedURL)

console.log("100. Original URL:", originalURL)
console.log("100. Encoded URL:", encodedURL)
console.log("100. Decoded URL:", decodedURL)
