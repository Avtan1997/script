//Promice это обещание что решение придет.
// const p = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('newPromiseError'), 2000)
// })
// p.then(
//     data => console.log(data)
// ).catch(
//     reason => console.log(reason)
// ).finally(
//     () => console.log('finish')
// )
// const p2 = Promise.resolve(42)
// const p3 = Promise.reject('Error')
//
// console.log(p2)
// p3.then().catch(reason => console.log(reason))
//===================================================
//Что такое Промис? Промись что-то такое которое может случится в будущем но с задержкой не сразу
// let a = 7
//
//
//
// console.log(a)
//
// let b = new Promise(function (resolve, reject){
//     setTimeout(() => {
//         resolve(a = 99)
//     },2000)
// })
//
// b.then(function (){
//     console.log(a)
// })
//=================================================================================
// Данный подход плох чем что мы используем большую вложенность большая количество коллбеков внутри колбеков
// console.log('Request data...')
//
// setTimeout(() => {
//     console.log('Preparing data...')
//     const backendData = {
//         server: 'aws',
//         port: 2000,
//         status: 'working'
//     }
//     setTimeout(() =>{
//         backendData.modified = true
//         console.log('Data received', backendData)
//     },2000)
// },2000 )
// Сделаю тоже самое что сверху с помощю промисов
console.log('Request data...')

const p = new Promise(function (resolve, reject){ // данная функция принемает два аргумента resolve, reject
    setTimeout(() => {
        console.log('Preparing data...')
        const backendData = {
        server: 'aws',
        port: 2000,
        status: 'working'
        }
        resolve(backendData)
    },2000)
})
p.then(data => { //метод then читается когда промис когда выполнится
    return  new Promise((resolve, reject) => {
        setTimeout(() =>{
        data.modified = true
       resolve(data)
    },2000)
    })
}).then(clientData =>{
    clientData.fromPromise = true
    return clientData
}).then(data => {
    console.log('Modified', data)
})
    .catch(err => console.error('Error:', err))
    .finally(() => console.log('Finally'))
