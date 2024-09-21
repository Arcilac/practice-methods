// Sample object for demonstrations
const person = {
  name: "Alice",
  age: 30,
  city: "New York",
}

// 31. Use `Object.keys()` to get an array of a given object's own enumerable property names.
console.log("31. Object.keys():", Object.keys(person))

// 32. Use `Object.values()` to get an array of a given object's own enumerable property values.
console.log("32. Object.values():", Object.values(person))

// 33. Use `Object.entries()` to get an array of a given object's own enumerable string-keyed property [key, value] pairs.
console.log("33. Object.entries():", Object.entries(person))

// 34. Use `Object.assign()` to copy the values of all enumerable own properties from one or more source objects to a target object.
const target = { a: 1, b: 2 }
const source = { b: 3, c: 4 }
const assignedObject = Object.assign(target, source)
console.log("34. Object.assign():", assignedObject)

// 35. Use `Object.create()` to create a new object with the specified prototype object and properties.
const personPrototype = {
  greet() {
    console.log(`Hello, I'm ${this.name}`)
  },
}
const john = Object.create(personPrototype)
john.name = "John"
console.log("35. Object.create():")
john.greet()

// 36. Use `Object.freeze()` to freeze an object: other code can't delete or change any properties.
Object.freeze(person)
person.age = 31 // This won't work
console.log("36. Object.freeze():", person)

// 37. Use `Object.seal()` to seal an object, preventing new properties from being added to it and marking all existing properties as non-configurable.
const sealedObject = { x: 1 }
Object.seal(sealedObject)
sealedObject.x = 2 // This works
sealedObject.y = 3 // This won't work
console.log("37. Object.seal():", sealedObject)

// 38. Use `Object.is()` to determine whether two values are the same value.
console.log("38. Object.is():", Object.is(NaN, NaN), Object.is(0, -0))

// 39. Use `hasOwnProperty()` to determine whether an object has the specified property as its own property.
console.log(
  "39. hasOwnProperty():",
  person.hasOwnProperty("name"),
  person.hasOwnProperty("toString")
)

// 40. Use `Object.defineProperty()` to add a new property directly to an object, or modify an existing property's attributes.
Object.defineProperty(person, "gender", { value: "female", writable: false })
console.log("40. Object.defineProperty():", person.gender)

// 41. Use `Object.getOwnPropertyDescriptor()` to get the property descriptor for a specific property of an object.
console.log(
  "41. Object.getOwnPropertyDescriptor():",
  Object.getOwnPropertyDescriptor(person, "gender")
)

// 42. Use `Object.getOwnPropertyNames()` to get an array of all properties (enumerable or not) found directly in a given object.
console.log("42. Object.getOwnPropertyNames():", Object.getOwnPropertyNames(person))

// 43. Use `Object.getPrototypeOf()` to get the prototype of the specified object.
console.log("43. Object.getPrototypeOf():", Object.getPrototypeOf(john) === personPrototype)

// 44. Use `Object.setPrototypeOf()` to set the prototype of a specified object to another object.
const newProto = {
  newMethod() {
    console.log("New method")
  },
}
Object.setPrototypeOf(john, newProto)
console.log("44. Object.setPrototypeOf():")
john.newMethod()

// 45. Use `Object.preventExtensions()` to prevent new properties from ever being added to an object.
const preventExtendedObj = { a: 1 }
Object.preventExtensions(preventExtendedObj)
preventExtendedObj.b = 2 // This won't work
console.log("45. Object.preventExtensions():", preventExtendedObj)

// 46. Use `Object.isExtensible()` to determine if an object is extensible.
console.log("46. Object.isExtensible():", Object.isExtensible(preventExtendedObj))

// 47. Use `Object.isFrozen()` to determine if an object is frozen.
console.log("47. Object.isFrozen():", Object.isFrozen(person))

// 48. Use `Object.isSealed()` to determine if an object is sealed.
console.log("48. Object.isSealed():", Object.isSealed(sealedObject))

// 49. Use `Object.fromEntries()` to transform a list of key-value pairs into an object.
const entries = [
  ["name", "Bob"],
  ["age", 40],
]
console.log("49. Object.fromEntries():", Object.fromEntries(entries))

// 50. Create a deep clone of an object using a combination of `JSON.parse()` and `JSON.stringify()`.
const originalObj = { a: 1, b: { c: 2 } }
const deepClone = JSON.parse(JSON.stringify(originalObj))
console.log("50. Deep clone:", deepClone)
