'use strict' //строгий режим
// // Функции есть несколько способов создать функцию
// //Function Declaration -
// function greet (name) {
//     console.log('Привет - ', name)
// }
// //Function Expression -
// const greet2 = function greet2 (name) {
//     console.log('Привет 2 - ', name)
// }

// greet('Чынара')
// greet2('Чынара')
// console.log(typeof greet2) //
// console.dir(greet) //метод dir раскрывает функцию
// Анонимные функции
// let counter = 0
// const interval = setInterval(function () {
//     if (counter === 5){
//         clearInterval(interval)
//
//     } else {
//         console.log((++counter))
//
//     }
// }, 1000)

// function name (a, b, c = 'kill'){
//       console.log(a, b, c) //
//     }
//      // name('Avtan', 'Avtan', 'hello')
// //  const name = (a, b, c) => {
// //      console.log(arguments)
// //  }
// // name(42, 24, 'string')
//
// module.exports = {name}


//3 стрелочные функции
function greet()  {
    console.log('Привет - ', name)
}
const arrow = (name, age) => {
    console.log('Привет - ', name, age)
}

const arrow2 = name => console.log('Привет  -', name)
arrow2('Avtandil')
const pow2 = num => num **2
// console.log(pow2(5))


// 4 параматреры по умолчанию
// const sum = (a = 40, b = a * 2) => a + b
//
// console.log(sum(41, 4))
// console.log(sum())

function sumAll(...all) {
    console.log(all)
}
    sumAll(1, 2, 3, 4, 5)