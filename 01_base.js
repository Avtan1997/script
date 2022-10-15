//1 Переменные
//variable
// 8 тип данных
//camelCase
// const firstName = 'Avtandil' // string
// //const age = 24 // number
// const isProgrammer = true // boolean
// const _private = 'private'
// const $ = 'some value'
// const withNum5 = '5'
// 2 мутировани
//console.log('Имя человека: ' + firstName + ', а вазраст человека :' + age )
//alert('Имя человека: ' + firstName + ', а вазраст человека :' + age )
//const lastName =  prompt('Введите Фамилию')
//alert(firstName + '' + lastName)
// // 3 Операторы
// let currentYear = 2022
// const birthYear = 1997
// //const age = currentYear - birthYear
// const a = 10
// const b = 5
// console.log(a + b)
// console.log(a - b)
// console.log(a * b)
// console.log(a / b)
// console.log(currentYear)
// console.log((currentYear))

//4 Типы данных
// const isProgrammer = true
// const name = 'Avtandil'
// const age = 24
// let x
// console.log(typeof isProgrammer)
// console.log(typeof name)
// console.log(typeof age)
// console.log(typeof x)
// console.log( null)
//5 Приоритет операторов
// const fullAge = 24
// const birthYear = 1997
// const currentYear = 2022
// // < >= <==
// const isFullAge = (currentYear - birthYear) >= fullAge
// // console.log(isFullAge)
// const lastName = 'Tursunbekov'
// const name = 'Avtandil'
// const isProgrammer = false
// age = 'String'
// console.log(name)
// prompt('Введите имя')
//Двойной штрих || или двойной && простой (и)
// const age = 25
// const name = 'Vlad'
//
// if(age <= 18){
//     console.log('age <=18')
// }else if (age > 18 && age < 60) {
//     console.log('age > 18 && age > 60')
// } else {
//     console.log('age >= 60')
// // }

// const age = 18
// console.log(Boolean(typeof age ==='number'))
// if(typeof age === 'number' && age > 0) {
//     if(age <= 18){
//         console.log('age <=18')
//     }else if (age > 18 && age < 60) {
//         console.log('age > 18 && age > 60')
//     } else {
//         console.log('age >= 60')
//  }
// }
// const a = 15
// const b = 5
// function multi (obj ){
//     //const {a, b}=obj
//     const a = obj.a
//     const b = obj.b
//
//     return a * b
// }
// const obj = {
//     a: 7,
//     b: 9
// }
// console.log(multi({a: 23,b: 6 }))

// const obj = {name:'Avtan'}
// console.log(obj)
// obj.name = '1Avtan'
// console.log(obj)
// obj.age = 24
// console.log(obj)
// obj.prit = function (){
//     console.log('Hello')
// }
// console.log(obj)
// const p = obj.prit
// p()
// obj.getInfo = function (){
//     return obj.name
// }
// console.log(obj.getInfo())
// const n = obj.getInfo()
// console.log(n)
//
// let y = 1; let x = y = 2;
// console.log(x)
// const firstName = 'Avtandil'
// const age = 24
// const isProgrammer = true
// const _ = 'private'
// const $ = 'some value'
// // const if = 'lhfgkdh'//err
// const withNum5 = '5'
// const 5withNum5 err
// 2 мутирование
// console.log('Имя человека: ' + firstName + ', а возраст человека: ' + age)
//alert('Имя человека: ' + firstName + ', а возраст человека: ' + age)
// const lastName = prompt('Введите Фамилию')
// alert(firstName + ' ' + lastName)
// 3 операторы
// let currentYear = 2022
// const birthYear = 1997
//
// // const age = currentYear - birthYear
// const a = 10
// const b = 5
//
// let c = 32
// c = c + a
// console.log(a + b)
// console.log(a - b)
// console.log(a * b)
// console.log(a / b)
// console.log(++currentYear)
// console.log(--currentYear)
// console.log(c)
// 4 типы данных
// const isProgrammer = true
// const name = 'Avtan'
// const  age = 24
// let x
// console.log(typeof isProgrammer)
// console.log(typeof name)
// console.log(typeof age)
// console.log(typeof x)
// console.log( null)

// 5 Приоритет опероторов
// const fullAge = 24
// const birthYear = 1997
// const currentYear = 2022
// const isFullAge = currentYear - birthYear >= fullAge //
// console.log(isFullAge)
// // 6 Условные операторы
// const courseStatus = 'ready'
// if (courseStatus ==='ready') {
//     console.log('Курс уже готов и его можно проходить')
// }
// else if (courseStatus === 'pending') {
//     console.log('Курс пока находится в процессе разработки')
// } else {
//     console.log('Курс не получился')
// }
// const isReady = true
// if (isReady) {
//     console.log('Все готово!')
// }else {
//     console.log('Все не готово!')
// }
// //Тернарное вырожение
// isReady ? console.log('Все готово!') : console.log('Все не готово!')

// const num1 = 42
// const num2 = '42'
// console.log(num1 === num2)

// 7 Булевая логика
// 8 Функции
// function calculateAge(year) {
//     return 2022 - year
// }
//
// // const myAge = calculateAge(1997)
// // console.log(myAge)
// function logInfoabout(name, year) {
//     const age = calculateAge(year)
//     console.log('Человек по имени ' + name + 'сейчас имеет возраст ' + age)
// }
//     logInfoabout('Автандил',  '1997')
//     logInfoabout('Чынара',  '1998')

// 9 массивы
//  const cars = ['Мазда', 'Мерседес', 'Форд']
// // const cars = new Array( 'Мазда', 'Мерседес', 'Форд')
// console.log(cars.length)
// console.log(cars[1])
// console.log(cars[0])
// console.log(cars[2])
// cars[0] = 'Porsche'
// console.log(cars)
// cars[cars.length] = 'Mazda'
// console.log(cars)
// 10 циклы
// const cars = ['Мазда', 'Мерседес', 'Форд', 'Porsche']
//
// for (let i = 0; i < cars.length; i++) {
//  const car = cars[i]
// //  console.log(car)
// // }
// // 11 Объекты
// const person = {
//  firstName: 'Автандил',
//  lastName: 'Турсунбеков',
//  year: 1997,
//  language: ['Ru', 'En', 'Kg'],
//  hasWife: true,
//  greet: function (){
//   console.log('greet from person')
//  }
// }
// console.log(person.firstName)
// console.log(person['lastName'])
// const key = 'year'
// console.log(person[key])
// person.hasWife = false
// person.isProgrammer = true
// console.log(person)
// person.greet()
