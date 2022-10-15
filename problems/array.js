// // const arr = [1, 2, 3, 4, 5]
// // //Получить [2, 4, 6, 8, 10]
// // function arrayDuble(array) {
// //     const result = []
// //
// //     for (const item of array){
// //         console.log(item)
// //         result.push(item * 2)
// //     }
// //
// //     return result
// // }
// // console.log(arrayDuble(arr))
// // console.log(arr.map((item) => item * 2))
//
// //===============================================
// const arr1 = [
//     {name: 'John', money: 42},
//     {name: 'Sam', money: 24},
//     {name: 'Alex', money: 12},
// ]
// //Вернуть два массива в одном массиве имена в другом деньги.
// function  splitArr(array) {
//     const names = []
//     const moneys = []
//     for (const item of array){
//         // console.log(item)
//         // console.log(item.name)
//         // console.log(item.money)
//         names.push(item.name) // push добавлет элементы
//         moneys.push(item.money)
//     }
//     return {
//         names, moneys
//     }
// }
// const out = splitArr(arr1)
// console.log(out)
// const names = arr1.map(item => {
//    return  item.name
// })
//
// const names2 = arr1.map(function (item){
//     return  item.name
// })
// console.log(names2)
// const moneys = arr1.map(item => item.money)
// console.log(names)
// console.log(moneys)
//
//================================
const telegramSideBar = [
    {name: 'Обои', url: 'http://localhost:8080/fl.jpeg', time: '22:25', count: 0, message: '@localhost'},
    {name: 'JS', url: 'http://localhost:8080/js.jpeg', time: '22:15', count: 310, message: '@jobs'}
]