"use strict"

// OBJECTNI CLONLASH
// const number = {
//   x: 10,
//   y: 5,
// }
// const newNumber = number
// newNumber.x = 15
// console.log(number)
// console.log(newNumber)

// function nusxaObj(obj) {
//   let objNusxa = {}
//   for (const key in obj) {
//     objNusxa[key] = obj[key]
//   }
//   return objNusxa
// }

// const numbers = {
//   x: 10,
//   y: 5,
// }
// const addNum = {
//   z: 6,
// }

// const newNum = nusxaObj(numbers)
// newNum.x = 15;

// const newNum = Object.assign({}, numbers)
// newNum.x = 15;
// const allNum = Object.assign(numbers, addNum)

// console.log(allNum)
// console.log(numbers)
// console.log(newNum)


// ARRAYNI CLONLASH
// const arr = [1, 2, 3]
// const numbers = arr.slice()

// numbers[1] = "ulugbek"

// console.log(arr)
// console.log(numbers)

// function ham shunga o'xshash klonlanadi.


//  SPREAD
// const newArr = [...arr, ...numbers]
// console.log(newArr)


// const calc = [1, 2, 3]

// function logger(x, y, z) {
//   console.log(x + y + z);
// }

// logger(...calc)


const numbers = {
  x: 10,
  y: 5,
}

const newNum = { ...numbers }
newNum.x = 15

console.log(numbers)
console.log(newNum)