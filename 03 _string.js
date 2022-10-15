//В JavaScript любые текстовые данные являются строками.
// Не существует отдельного типа «символ», который есть в ряде других языков.


// const name = 'Автандил' // строки переменная name в name могу заначить свое имя
// const age = 24 // переменная age равняется к 24 чиловая переменная numbers
// function getAge() {
//     return age
// }
//

// const output = 'Привет меня зовут ' + name + ' и мой возраст ' +  age + ' лет' // + name знак конкотинаци

// const output = `Привет, меня зовут ${name} и мой возраст ${getAge()} лет ` //  `` для динамитечских выражение которые есть в js
// console.log(output)
//
// const name = 'Автандил'
//
// console.log(name.length)  // считаю сколько символов с помошью length
// console.log(name.toUpperCase()) // все символы этой строки name  привожу к верхнему регистру
// console.log(name.toLowerCase()) //Приводит все символы к нижнему регистру
// console.log(name.charAt(2)) //узнавать на какой позиции находится какой символ позицию 2 узнал
// console.log(name.indexOf('дил')) //Проверяю есть под страка в основной строке name слово дил
// console.log(name.toLowerCase(). startsWith('автан')) //Метод проверяет строку со строчки автан false  c маленькой буквы
// console.log(name.startsWith('Автан'))
// console.log(name.endsWith('ил!')) // Заканчивается ли строка с символами 'ил'
// console.log(name.repeat(3)) //Вызывает метод repeat  3 повторяем строчку 3 name
// const string = '         password          ' //создает пробелы и попдает в состав строки проблемы тоже проблем как баг лишнее
// console.log(string.trim()) // метод trim очишает все пробелы
// console.log(string.trimLeft()) // метод trim очишает c левой стороны
// console.log(string.trimRight()) // метод trim очишает c правой стороны

// function logPerson (s, personName, personAge) {
//
//     return 'Info about person'
// }
// const output = logPerson`Имя: ${personName}, Возраст: ${personAge}!`
// console.log(output)

// const name = 'Автандил'
// const age = 24
// function getAge (){
//     return age
// }
//
// // const output = 'Приет меня зовут ' + name + ' и мой возраст ' + age + 'лет.'
// const output = `Привет, меня зовут ${name} и мой возраст ${age < 30 ? 'a' : 'b'} лет.`
//
// console.log(output)

// const name = 'Автандил'
// console.log(name.length)
// console.log(name.toUpperCase())
// console.log(name.toLowerCase())
// console.log(name.charAt(0))
// console.log(name.indexOf('!'))
// console.log(name.startsWith('автан'))
// console.log(name.startsWith('Автан'))
// console.log(name.endsWith('ил!'))
// console.log(name.repeat( 3))
// const string = '      password      '
// console.log(string.trim())
// console.log(string.trimLeft())
// console.log(string.trimRight())
function logPerson(s, name, age) {
    if (age < 0) {
        age = 'Еще не родился'
    }
    return `${s[0]}${name}${s[1]}${age}${s[2]}`
}
const personName = 'Автандил'
const personName2 = 'Дастан'
const personAge = 24
const personAge2 = -10
const output = logPerson`Имя: ${personName}, Возраст: ${personAge}!`
const output2 = logPerson`Имя: ${personName2}, Возраст: ${personAge2}!`
console.log(output)
console.log(output2)