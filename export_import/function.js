//1 Функции
//В Js есть несколько способов создание функции, и сеть различные вариации
//Function Declaration можно обращатся когда захочу в данную функцию
// function greet(name){  //Функция  greet внутри greet(даю параметр name) // Функция greet может
//     // принимать несколько параметров типа name.
//     console.log('Привет - ', name) // В консоль вывожу строку и, даю пишу параметр name для вывода в кносоль
// }
// // Function Expression // Создал функцию и складывал в переменную
// const greet2 = function greet2 (name){
//     console.log('Привет 2 - ', name)
// }

// greet('Lena') //И вызываю функцию greet чтобы вызвать строку Привет Лена
// greet2('Lena')

// console.log(typeof greet) //узнаю тип greet
// console.dir(greet)  // Функции являются объектами и нужно смерится))
//=================================================================================================================
// 2 Анонимные функции
// let counter = 0
// const interval = setInterval(function (){ //setTimeout есть который задает задержку //setInterval задает интервал
//     if (counter === 5){
//     clearInterval(interval) //clearTimeout
//     }else {
//         console.log(++counter)
//     }
// }, 1000)
// 3 стрелочные функции
function greet(name) {
    console.log('Привет - ', name)
}

const arrow = (name, age) => {
    console.log('Привет - ', name, age)
}
const arrow2 = name => console.log('Привет - ', name) //  => -это стрелочная функция
arrow2('Avtandil')

const pow2 = num => num ** 2 //постоянно возводит во вторую стпень pow2 // ** - возводить в степень

console.log(pow2(5))
//
// 4 Параметры по умолчанию
