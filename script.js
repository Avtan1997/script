// let name = 'Avtan'
// console.log(name)
// name = 'Chynara'
// console.log(name)
//
// let color
// console.log(color)
// color = 'red'
// console.log(color)

/**************
 JavaScript names can include
letters, numbers, $, _
 **************/

// const name = 'Avtan'
// console.log(name)
// // name = 'Chynara'
// const color = 'red'
// console.log(color)
//
// const user = {
//   name: 'Avtan',
//   gender: 'male',
//   age: 25
// }
// console.log(user)
// user.name = 'Chynara'
// user.gender = 'women'
// console.log(user)

// const colors = ['red', 'orange', 'green']
// console.log(colors)
//
// colors.push('blue')
// console.log(colors)

// let x = 'something'
// console.log(x)
// x = 3
// console.log(x)
/********************************
 * Примитивные типы данных!
 */
//String
// const someText = 'Some text'
// console.log(typeof someText)
//
// //Number
// const someNumber = 42
// console.log(typeof someNumber)
//
// //Boolean
// const someBoolean = false
// console.log(typeof someBoolean)
//
// //Null
// const someNull = null
// console.log(typeof someNull)
//
// //Undefined
// let someUndefined
// console.log(typeof someUndefined)
//
// //Symbol
// // const someSymbol = Symbol()
// // console.log(typeof someSymbol)

/*******************************
 Ссылочные типы данных возвращают объект!
 */
//Array
// const someArray = [1, 2, 3, 4]
// console.log(typeof someArray)

//Object Literal
// const someObjectLiteral = {
//   firstProperty: '42',
//   secondProperty: 'secondProperty'
// }
// console.log(typeof someObjectLiteral)

//Function
// const someFunction = new function (){}
// console.log(typeof someFunction)
//==========================================

// function User(name) {
//   this.name = name;
//   this.isAdmin = false;
// }
//
// let user = new User("Jack");
//
// console.log(user.name); // Jack
// console.log(user.isAdmin); // false
//
// user = new User('Avtandil')
// console.log(user.name); // Jack
// console.log(user.isAdmin); // false

/** Преоброзование типов в строку */
//String()
// let x = String(1112)
// x = String(2 + 2)
//  x = String(false)
// x = String(new Date())
// x = String(['one', 'two', 'three'])
//
// //to string()
//
// x = (35).toString()
// x = (true).toString()
//
//
// console.log(x)
// console.log(typeof x)
// console.log(x.length)

/** Преоброзование типов в число */
//Number
// let y = Number('5.1234567')
// y = Number(false)
// y = Number(null)
// y = Number('text')
// y = Number([1, 2, 3])

/** parseInt() **/
// y = parseFloat('123.20')
//
// console.log(y)
// console.log(typeof y)
// console.log(y.toPrecision(5))

// const x = '5'
// const y = '3'
// const z = x * y
//
// console.log(z)
// console.log(typeof z)

/** Операции с числами **/
// const firstNumber = 50
// const secondNumber = 3
// let result

//Simple math operations
// result = firstNumber + secondNumber
// result = firstNumber - secondNumber
// result = firstNumber * secondNumber
// result = firstNumber / secondNumber
// result = firstNumber % secondNumber

/** Math object */
// result = Math.PI // Пии
// result = Math.round(3.5) // Метод округления
// result = Math.ceil(3.3) // Округление в большую сторону(Потолок)
// result = Math.floor(3.7) // Округление в меньшую сторону (Пол)
// result = Math.sqrt(9) // Квадратный корень sqrt метод
// result = Math.abs(-7) // Абсолютное значаение или модулевое
// result = Math.pow(3,4 ) //Возводим в степень
// result = Math.min(3, 45, 32, 49, 50 ) //Мин извлекает минимальное
// result = Math.max(3, 45, 32, 49, 50 ) // Мах извликает максимальное значение
// result = Math.floor(Math.random() * 2000000) + 1 //Метод выдает случайное значение рандом.(Обернул в floor чтобы получать целые числа)
//
// console.log(result)

/** Строки (Concatanation) */
// let result
// const firstName = 'Jack'
// const lastName = 'Brown'
// const space = ' '
// const age = 25
// const greeting = 'Hey there'
//
//
// result = firstName + space + lastName
// result = greeting + space + 'My name is' + space + firstName + space + lastName + space +
//   ". I'm" + space + age + ' years old.'

/**Escaping*/
// result = 'i\'m 24 years old'
// result = "I like \"Star wars\" movie" //Бэк слеш \"

/** Properties and methods */
// result = 'Hello!'.length
// result = firstName.length


/** Метод конкат*/
// result = firstName.concat(space,lastName)
// result = greeting.concat(space, 'My name is', space, firstName, space, lastName)
// /** toUppercase */
// result = result.toUpperCase()
// result = result.toLowerCase()

/** Arrays index */
// result = firstName[0]
//
// result = 'Hello'.indexOf('H')
// result = 'Hello lol'.lastIndexOf('l')
// result = firstName.indexOf('a')
// result = 'Hello lol'.lastIndexOf('lo')
// result = firstName.indexOf('b')

/** charAt() метод */
// result = firstName.charAt(0)
// const longString = 'Hi, i\'m a long string'
// result = longString.charAt(longString.length -1)

/** substring метод/ под строка строка которая содержится в исходной строке, для извлечения */
// result = greeting.substring(4,9)


/** slice() можно обращатся как с массивами */
// result = greeting.slice(4, 9)
// result = greeting.slice(-10)


/** split() метод разделяет строку на несколько строк*/
// result = longString.split(' ')
// const coloros = 'red, orange, green, blue'
// result = coloros.split(',') //Получаем массив из всех цветов

/** replace() метод что значит заменить одну строку на другую в исходной строке */
// result = coloros.replace('blue', 'yellow') // blue заменил на yellow

 /** includes() включает метод возврашет значение true либо false если строка содержит другие символы */
// result = coloros.includes('green')
//
//
// console.log(result)

/** Template Strings шаблонные строки либо Template literals */
// const brand = 'Toyota'
// const model = 'Camry'
// const color = 'Grey'
// const year = '2019'
//
// let carHtml

/** Old approach(before es6) старый метод до es6 */

// carHtml = '<h3>' + 'Car Description' + '</h3>' +
//   '<ul>' +
//   '<li>Brand: ' + brand + '</li>' +
//   '<li>Model: ' + model + '</li>' +
//   '<li>Color: ' + color +'</li>' +
//   '<li>Year: ' + year +'</li>' +
//   '</ul>'
// document.body.innerHTML = carHtml

/** New approach(template literals or template string) новый метод шаблонные строки */

// carHtml = `
// <h1>Car Description</h1>
// <ul>
// <li>Brand: ${brand}</li>
// <li>Model: ${model}</li>
// <li>Color: ${color}</li>
// <li>Year: ${year}</li>
// <li>Year: ${2010 + 7}</li>
// <li>Doors: ${getDoorsNumber()}</li>
// <li>Tax: ${year < 2000 ?'20%' : '10%'}</li>
//
//
// </ul>
// `
//Узнать про тернарный оператор

// document.body.innerHTML = carHtml
//
// function getDoorsNumber() {
//  return 5

/** Задание  (prompt подсказка)*/
// let favoriteColor
//
// prompt(' What is your favorite color?')
// console.log('Your favorite color is' + favoriteColor)
//=========================================================

// const firstName = prompt('Как вас зовут?')
// const lastName = prompt('Напишите свою Фамилию?')
// const age = prompt('Укажите свой возраст?')
//
// console.log('Ваше имя ' + firstName + ', ваше Фамилия ' + lastName + ', и ваш возраст ' + age + '.')

/** Операторы сравнения  */
//  const x = '5'
// const y = '5'
// let isXMoreThanY = x !== y
//
// console.log(isXMoreThanY)

//Сравнивание величин
// console.log(false == 0)
// console.log(NaN !== NaN)

/** Приоритет операторов */
// const x = 2 + 10 / 2
// const y = 10 - x > 10
// console.log(y)
// Сайт MDN  web

// let x, y
// console.log(x, y)
// x = y =  10 + 5 - 3 * 4
// console.log(x, y)

/** Сокращенная форма записи оператора */
// let  x = 5
// let y = 3
// x += 7
// x -= 2
// x *= 3
// x /= 2
//
// x++
// x++
// x--
// x--
// y = x--
// // x++ //Постфикцнная форма записи
// // ++x //Префиксная форма записи
//
// console.log(y)

/** Задание лишний вес */
// const theWeight = prompt('Введите пожалуйста свой вес')
// const height = prompt('Введите пожалуйста свой рост')
//
// const bodyMassIndex = theWeight / Math.pow(height, 2)
// const areYouOverweight = bodyMassIndex >= 25
//
// console.log(bodyMassIndex)
// console.log(areYouOverweight)
// alert('У вас лишний вес?' + areYouOverweight)

/** if Else statement*/
// const age = 18
// const isAdult = age >= 18
// if(isAdult) {
//  console.log('Вы можете смотреть это видео!')
// }else {
//  console.log('Извините вы не можете смотреть этот контент вам нет 18!')
// }
//=======================================
// const age = 16
//
// if(age >= 18) {
//  console.log('You can watch this video!')
// }else {
//  // console.log('Извините вы не можете смотреть этот контент вам нет 18!')
//  const yearsLeft = 18 - age
//  console.log(`You are too young. You can watch this video after ${yearsLeft} years later`)
// }

//========================================
// const birthYear = 1997
// const yearNow = 2022
// const age = yearNow - birthYear
// let answer
// if (age >= 16){
//  answer = 'Yes'
// }else {
//  answer = 'No'
// }
// console.log(`Am I adult? - ${answer}`)
//========================================

// const color = 'Orange'
//
// if(color === 'Green'){
//  console.log('Go!')
//
// }else if(color === 'Yellow'){
//  console.log('Get ready!')
//
// }else if(color === 'Red') {
//  console.log('Stop!')
// }else {
//  console.log('Incorrect color!')
// }
//========================================
/** Задание лишний вес if else */
// const theWeight = prompt('Введите пожалуйста свой вес')
// const height = prompt('Введите пожалуйста свой рост')
//
// const bodyMassIndex = theWeight / Math.pow(height, 2)
// const areYouOverweight = bodyMassIndex >= 25
//
// if(areYouOverweight){
//  console.log(`Yes, your BMI is more than normal by ${bodyMassIndex - 25}`)
//  alert(`Yes, your BMI is more than normal by ${bodyMassIndex - 25}`)
// }else {
//  console.log(`No, your weight is normal`)
//  alert(`No, your weight is normal`)
// }



// console.log(bodyMassIndex)
// console.log(areYouOverweight)
// alert('У вас лишний вес?' + areYouOverweight)

/** Truthy and false значения  */
//JavaScript false values:
//false
// 0, '', undefined, null, Nan.
// console.log(Boolean(0))
// console.log(Boolean(''))
// console.log(Boolean(undefined))
// console.log(Boolean(null))
// console.log(Boolean(NaN))
//Truthy
// console.log(Boolean(32))
// console.log(Boolean('Hello'))
// console.log(Boolean([]))
// console.log(Boolean({}))
// console.log(Boolean(3.5))

// const age = 3

// //Пример
// if(age){
//  console.log('Человек был рожден!')
// }else {
//  console.log('Человек еще не рожден!')
// }
//Пример
// let weight = 0
//
// if(weight){
//  console.log('Вес определен.')
// }else {
//  console.log('Вес не определен.')
// }
/** Boolean логика */
// AND, OR, NOT

//AND (ии-&&) логическая операция
// console.log(true && true)// правда и правда будет true
// console.log(true && false)//false
// console.log(false && false)//false

//OR ||
// console.log(true || true) //true
// console.log(true || false)//true
// console.log(false || false)//false

//NOT !
// console.log(!true) //false
// console.log(!false)//true

// const hasMoney = true
// const isAdult = true
//
// if(hasMoney && isAdult){
//  console.log('Вы можете купить напиток!')
// }else {
//  console.log('Вы не можете купить напиток!')
// }


//Примеры
// const hasMoney = false
// const isWithParent = false
//
// if(hasMoney || isWithParent){
//  console.log('Вы можете купить апельсин!')
// }else {
//  console.log('Вы не можете купить апельсин!')
// }


//Пример
// const hasMoney = true
// const isAdult = true
// const isCompletelyDrunk = false
//
// // console.log(!isAdult)
//
// if(hasMoney && isAdult && !isCompletelyDrunk){
//  console.log('Вы можете купить напиток!')
// }else {
//  console.log('Вы не можете купить напиток!')
// }

/** Switch Statement переключатель альтернатива if else */
// const color = 'Orange'

// if(color === 'Green'){
//  console.log('Go!')
//
// }else if(color === 'Yellow'){
//  console.log('Get ready!')
//
// }else if(color === 'Red') {
//  console.log('Stop!')
// }else {
//  console.log('Incorrect color!')
// }
//=======================================
//Используем Switch и case и break!
// const color = 'Yellow'
// switch (color){
//  case 'Green':
//   console.log('Go!')
//   break
//  case 'Yellow':
//    console.log('Get ready!')
//   break
//  case 'Red':
//    console.log('Stop!')
//     break
//  default:
//   console.log('Incorrect color!')
// }
//==========================================
//Применение Switch
// const weekDay = 'sunday'
//
// switch (weekDay){
//  case 'monday':
//   console.log('Сохраните спокойствие и притворитесь что это не Понедельник.')
//     break
//  case 'tuesday':
//   console.log('Сохраните спокойствие и притворитесь что это не Вторник.')
//   break
//  case 'wednesday':
//   console.log('охраните спокойствие и притворитесь что это не Среда.')
//   break
//  case 'thursday':
//   console.log('Сохраните спокойствие и притворитесь что это не Четверг.')
//   break
//  case 'friday':
//   console.log('Сохраните спокойствие и притворитесь что это не Пятница.')
//   break
//  case 'saturday':
//  case 'sunday':
//   console.log('Сохраните спокойствие и притворитесь что это не Субота .')
//   console.log('Сохраните спокойствие и притворитесь что это не Воскресенье.')
//   break
//  default:
//   console.log('Это день недели которого я не знаю :(')

//}
////
////
