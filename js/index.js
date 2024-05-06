"use strict";

// alert("Hello JavaScript")

// const place = confirm("Are you here?")
// console.log(place)

// const currentPlace = prompt("where are you?", "") // typeof string
// const age = +prompt("How old are you?", "")
// console.log(age);

// const arr = []
// arr[0] = prompt("What's your favourite color? #1", "")
// arr[1] = prompt("What's your favourite color? #2", "")
// arr[2] = prompt("What's your favourite color? #3", "")   // typeof object
// console.log(arr)

// const user = "Ulug'bek"
// const job = "React developer"
// console.log(`User name is ${user}, he is ${job}`)        // interpolatsiya

// console.log(6 + +"9")          // natija: 15

// console.log(10 % 3) // qoldiq: 1

// console.log(4 * 3 ** 2);       // 4 * 9                    Expected output: 36
// const a = 4 ** 3 ** 2;         // Same as 4 ** (3 ** 2);   evaluates to 262144
// const b = 4 / 3 / 2;           // Same as (4 / 3) / 2;     evaluates to 0.6666...

// const a = 1;
// const b = 2;
// typeof a + b;                  // Equivalent to (typeof a) + b; result is "number2"


//        AMALIYOT
// for (let i = 1; i < 2; i++) {
//   var numberOfSeries = +prompt("Nechta serial ko'rdingiz?", "")
//   if (numberOfSeries === 0) {
//     i--
//   }
// }
const seriesDB = {
  count: 0,
  series: {},
  actors: {},
  genres: [],
  private: false,
  start: function() {
    seriesDB.count = +prompt("Nechta serial ko'rdingiz?", "")

    while (
      seriesDB.count == '' || seriesDB.count == null || isNaN(seriesDB.count) 
    ) {
      seriesDB.count = +prompt("Nechta serial ko'rdingiz?", "")
    }
  },

  rememberMySeries: function() {
    for (let i = 1; i <= 2; i++) {
      const lastSerial = prompt("Oxirgi ko'rgan serialingiz?")
      if (lastSerial === null || lastSerial === "") {
        i--
        continue
      }
      let index = 0
      do {
        var serialRange = +prompt("Nechchi baho berasiz?")
        if (serialRange === 0) {
          continue;
        }
        index++
      } while (index < 1)
      seriesDB.series[lastSerial] = serialRange
    }
  },

  detectLevelSeries: function() {
    if (seriesDB.count < 5) {
      console.log("Kam serial ko'ribsiz")
    } else if (seriesDB.count < 10) {
      console.log("Siz classik tomoshabin ekansiz")
    } else {
      console.log("Siz serialchi zvezda ekansiz")
    }
  },

  showDb: function() {
    const private1 = prompt("mahfiy bo'lsinmi?", "")
    seriesDB.private = private1
    if (seriesDB.private === "yo'q") {
      console.log(seriesDB)
    }
  },

  writeGenres: function () {
    // for (let i = 0; i < 3; i++) {
    //   const janr = prompt(`Yaxshi ko'rgan janringiz #${i+1}`)
    //   if (janr == '' || janr == null || isNaN(janr)) {
    //     console.log("Siz noto'gri ma'lumot kiritdingiz")
    //     i--;
    //   } else {
    //     seriesDB.genres[i] = janr
    //   }
    // }

    let genres = prompt("Yaxshi ko'rgan janrlaringizni vergul yordamida yozing")
    console.log(genres)
    if (genres == '' || genres == null) {
      console.log("Siz noto'gri ma'lumot kiritdingiz")
    } else {
      seriesDB.genres = genres.split(", ")
    }


    seriesDB.genres.forEach((item, idx) => {
      console.log(`Yaxshi ko'rgan janringiz ${idx + 1} - nomi ${item}`)
    })
  },

  visibleDB: function() {
    if(seriesDB.private) {
      seriesDB.private = false
    } else {
      seriesDB.private = true
    }
  }
} 
// rememberMySeries()
// detectLevelSeries()
// writeGenres()
// showDb()

// function rememberMySeries() {
//   for (let i = 1; i <= 2; i++) {
//     const lastSerial = prompt("Oxirgi ko'rgan serialingiz?")
//     if (lastSerial === null || lastSerial === "") {
//       i--
//       continue
//     }
//     let index = 0
//     do {
//       var serialRange = +prompt("Nechchi baho berasiz?")
//       if (serialRange === 0) {
//         continue;
//       }
//       index++
//     } while (index < 1)
//     seriesDB.series[lastSerial] = serialRange
//   }
// }
// function detectLevelSeries() {
//   if (seriesDB.count < 5) {
//     console.log("Kam serial ko'ribsiz")
//   } else if (seriesDB.count < 10) {
//     console.log("Siz classik tomoshabin ekansiz")
//   } else {
//     console.log("Siz serialchi zvezda ekansiz")
//   }
// }
// function showDb () {
//   const private1 = prompt("mahfiy bo'lsinmi?", "")
//   seriesDB.private = private1
//   if (seriesDB.private === "yo'q") {
//     console.log(seriesDB)
//   }
// }
// function writeGenres () {
//   for (let i = 0; i < 3; i++) {
//     const janr = prompt(`Yaxshi ko'rgan janringiz #${i+1}`)
//     seriesDB.genres[i] = janr
//   }
// }
// seriesDB.series = {
//   [lastSerial]: serialRange,
//   [lastSerial2]: serialRange2,
// }


// FUNCTION DECLORATION
// function calc(a, b) {
//   return a + b;
// }
// const sumOfAandB = calc(10, 5)

//  FUNCTION EXPRESSION
// const logger = function() {
//   console.log("Hello world")
// }
// logger()

// ARROW FUNCTION
// const calc = () => a + b;
