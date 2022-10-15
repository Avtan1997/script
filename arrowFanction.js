//Использовать стрелочные функции в качестве обработчиков
// let fn1 = function (){return 1}
// let fn2 = () => 2
// console.log(fn1);
// console.log(fn2);
// let getHours = (actual, overtime) => {
//    return  actual + overtime
//
// }
//    console.log(getHours(8, 2))
// let getTaskld = () => ({
//     id:1,//метка с литералом единица
//     prioruty:100
// })
// console.log(getTaskld())
//Функции обработчикики , и когда использовать функции методов объекта
// document.addEventListener('click',function (){//вызов функции как обработчик
//     console.log(this)
// })
// iife
// (function (){
//     'use strict'
//     document.addEventListener('click', () => {
//         console.log(this)
//     })
// })(§)
//  let CoolWidget ={
//     init:function (){
//         document.addEventListener('click', (event) =>
//         this.doSomething(event.type), false)
//     },
//     doSomething:function (type){
//         console.log(`Handling ${type} event`)
//     }
//  }
//  CoolWidget.init()
// let task = {
//     id: 123,
//     done: function (){
//         return() => console.log(this.id)
//     }
// };
// let anotherTask = {
//     id:987
// };
// task.done().bind(anotherTask)();
//Аргументы и ... rest параметры

// function log(msg){
//     let print = (...rest) => console.log(rest[0])
//     print(`LOG:${msg}`)
// }
// log('Hello')

//Стрелочные функции нельзя использовать как функции конструкторы потому что у них нет свойства  prototype
// let getTaskld = () => 1
// console.log(
//     getTaskld.hasOwnProperty('prototype') //получим false потому что свойства prototype нет!
// )
// console.log(conc(1,1))
// function conc(a, b){
//     return `${a} ${b}`
// }
// console.log(comp('1','1'))
// const comp = function (a, b){
//     return a === b ? 1 : -1
// }

// const btn = document.querySelector('')
//Фибоначи по формуле
// const fibo = function _fibo(n){
//     switch (n){
//         case 0: return 0;
//         case 1: return 1;
//         default: return _fibo(n - 1) + _fibo(n - 2)
//     }
// }
// console.log(fibo(10))

// const func = function factorial (n) {
//     return n ? n * factorial(n - 1) : 1
// }
// console.log(func(5))
//Функция

// const arr = [1, 4, 3, 2, 8, 7, 11, 12]
// const result = arr.map(element => element * element)
//     .filter(element => element < 100)
//     .sort((element1, element2) => element1 - element2)
// console.log(result)

//Создаю конструкцию
// const result = (function (a, b) {
//         return `${a}${b}`
// })(1, 2)
// console.log(result)
//object and rest параметры
// function parts(...rest){
//     rest.map(param => {
//         const list = param.split(':')[1]
//
//         return list
//     })
// }
// console.log(parts())

// function toConsole(msg){
//     console.log(msg)
// }
// function toAlert(msg){
//     alert(msg)
// }
// function splitToWords(msg, callback){
//     const words =msg.split('')
//     if (callback) {
//         words.forEach(word => callback(word))
//     } else {
//         return words
//     }
// }
// // splitToWords('a b c',toConsole)
// // splitToWords('a b c',toAlert)
// console.log(splitToWords('a b c'))
//Копирайт
// function copyright() {
//     const copy = '\u00A9'
//
//     return function (p){
//         return `${copy} ${p}`
//     }
// }
// console.log(copyright()('EPAM'))

// function copyright(a = '\u00A9') {
//     const copy = a
//
//     return function (p){
//         return `${copy} ${p}`
//     }
// }
// console.log(copyright('/=')('EPAM'))
// Функция как метод
// const employee = {
//     name: 'Ann',
//     work() {
//         console.log(`I am ${this.name}. I am working...`)
//     }
// }
// employee.work()
// //Взаимствовния
// const person = {
//     name: 'Boris'
// }
// employee.work.call(person)

//Memoization

// const fiboMemo =(function (){
//     const arr = [0, 1]
//     const f = function fibo(n){
//         let result = arr[n]
//         if (typeof result !== 'number'){
//             result = fibo(n - 1) + fibo(n - 2)
//             arr[n] = result
//         }
//     }
//     return result
// })()
// for (const i=0, )