"use strict";

const arr = [2, 13, 14, 25, 1]

arr.sort((a, b) => a - b)
console.log(arr)

// function compareFn(a, b) {
//   return a - b;
// }

// arr[99] = 0
// console.log(arr.length)     // length = 100

// arr.forEach(function (item, index, arr) {
//   console.log(`${index}: ${item} into arr ${arr}`)
// })

// arr.pop();
// arr.push(7);

// arr.shift()            // shift va unshift metodlari arrayni qayta render bo'lishga majbur qiladi
// arr.unshift(9)         // va shunish uchun ham bu metodlardan amalda deyarli qo'llanilmaydi.

// console.log(arr)


// for(let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// for(let value of arr) {
//   console.log(value)               // break; va continue; ni ishlatishga qulay forEach ga qaraganda
// }

// const movies = prompt("What's your favourite movies?", "");
// const userMovies = movies.split(", ")
// userMovies.sort()
// console.log(userMovies.join("- "))