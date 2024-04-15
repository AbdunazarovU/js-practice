"use strict";

// const obj = new Object();
const theif = {
  jacket: "black",
  height: 1.7,
  colors: {
    hair: "gray",
    style: "curley",
  },
  howOut: function() {                    // Method
    console.log("Fast with help doors")
  }
};

// const hair = theif.colors.hair;
// const style = theif.colors.style;
const { hair, style } = theif.colors;     // Destruptizatsiya

console.log(hair)
console.log(style)


// theif.howOut();                        // Call method

// console.log(theif)
// delete theif.jacket;
// console.log(theif)

// const arrTheif = Object.keys(theif).length
// console.log(arrTheif)

// for(let key in theif) {
//   console.log(`Property ${key} has value ${typeof theif[key]}`)
// }

// let count = 0
// for(let key in theif) {
  // count++;
  // if (typeof theif[key] === "object") {
  //   for(let i in theif[key]) {
  //     console.log(`Property ${i} has value ${theif[key][i]}`)
  //   }
  // } else {
  //   console.log(`Property ${key} has value ${theif[key]}`)
  // }
// }
// console.log(count)