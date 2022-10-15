//Массивы обычно описываются как «объекты, подобные спискам»;
// они представляют собой в основном отдельные объекты, которые содержат несколько значений,
// хранящихся в списке. Объекты массива могут храниться в переменных и обрабатываться во многом так же,
// как и любой другой тип значения, причём разница заключается в том, что мы можем получить доступ к каждому
// значению внутри списка отдельно и делать супер полезные и эффективные вещи со списком, а также делать то
// же самое для каждого из значений.
// const a = [42]
// const b = {
//     '0': 42
// }
// console.log(a[0])
// console.log(b['0'])
// console.log(a.length)
// console.log(b.length)


//
// // Стандатрная конструкция
// const a = [5, 5, 6, 7, 5, 42, 54]
// let sum = 1
// // let i = 0 стартовая позиция ; i < a.length условия прирывания цикла; i++ шаг цикла;
// // for (let i = 0; i < a.length; i++) {
// //    sum +=  a[i]
// //     console.log(`index ${i}, value ${a[i]}`)
// // }
// // console.log(sum)
//
// for (let i = a.length - 1; i >= 0; i--){
//     sum +=  a[i]
//      // console.log(`index ${i}, value ${a[i]}`)
// }
// // console.log(sum)
// // for (;;){console.log(1)} // бесконечный цикл пример
// // console.log(2)
// for (const item of a.entries()){ // of спрашивает у  а  полный список массива
//     console.log(item) //a.entries дает индекс значение [0, 5]
// }

const name = 'Avtandil'
// const nameArr = [...name] // Простой способ заполнить массив строкой через запятые разделить строку
// console.log(nameArr.reverse().join(''))
// console.log([...'   Avtandil   ']
//     .filter(el => el !== 'v')
//     .reverse()
//     .join('')
//     .toUpperCase()
//     .trim()
// )
// function filtrName(name, latter){
//     let filtredName = ''
//     for (const l of name){
//         if(l === latter) {
//             continue //только для цикла
//         }
//
//         filtredName += l
//     }
//     return filtredName
// }
//
// console.log(filtrName(name, ''));
// console.log(name.replace('Av','')) // replace находит и заменят  3 строки в конце
// const arr = ['a', 'b', 'c'].at(-1)
// console.log(arr)

// const isPalindrome = function(x) {
//     const str = x + '' // Перевод X в строку
//     const reverseStr = [...str] //  разбиение строки по буквенно
//         .reverse() // переворачиваем массива
//         .join('') // Объедение массива в строку
//     return str === reverseStr // === истина или ложь дает
// };
// console.log(isPalindrome(121));

console.log(5% 2 === 1) // % остаток от деления
console.log(4% 2 === 1) 