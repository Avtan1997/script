// В JS любая функция которая передается внутрь как аргумент
// называют  callback функция или функция обратного вызова
// Смысл Callback функции в том что она  вызывается внутри другой
// функции.
function showMsg (name, status, callback) {
    if (callback && typeof callback === 'function') {
        callback()
    } else {
        console.log(`Hello ${name}, you status is ${status}`)
    }
}
console.log('0')
showMsg('John', 'admin',() => {
   console.log((`Hello message not supported.`))
})
console.log('1')
showMsg('John', 'Admin')
console.log('2')
function printMyname(){
    console.log('Avtandil')
}
    function printMyname2(){
        console.log('Start')
} //setTimeout встроенная функция это Callback функция
setTimeout(printMyname2, 1000)
console.log('3')
setTimeout(printMyname, 2000)
console.log('End')
//
