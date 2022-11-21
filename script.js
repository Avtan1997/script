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
// console.log(result)


/**Escaping*/
// result = 'i\'m 24 years old'
// // result = "I like \"Star wars\" movie" //Бэк слеш \"
// console.log(result)

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
// //=========================================================
//
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
//
//
//
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

/** Statements & Expressions */
// Expressions это вырожение
//Statements это тоже выражение

// Statements
// const number = 10
//
// if(number > 0){
//  const text = 'The number is positive'
// }
// console.log(`${number - 2} is also positive number.`)

/** Тернараный оператор */
// const money = 1000
// const cost = 1
// money >= cost ? console.log('You can buy it.') : console.log('You can not buy it.')
// const canYouBuyIt = money >= cost ? 'You can buy it.' : 'You can not buy it.'
// console.log(canYouBuyIt)

//Пример if else statements
// let canYouBuyIt1
// if (money >= cost){
//  canYouBuyIt1 = 'You can buy it.'
// }else {
// canYouBuyIt1 =  'You can not buy it.'
// }
// console.log(canYouBuyIt1)

//Тернарный оператор
// console.log(`You can${money >= cost ? ' ' : ' not'} buy it.`)

// let firstCheck = false,
//   secondCheck = false,
//   access = firstCheck ? "Доступ запрещён" : secondCheck ? "Доступ запрещён" : "Доступ разрешён";
//
// console.log( access ); // выводит в консоль "Доступ разрешён"

//Тернарный оператор задание!
// const money = 19
// const age = 18
// age >= money ? console.log('You can not buy the alcohol!') : console.log('You can buy the alcohol!')
//=============================================================
// const age = prompt('Введите свой возраст')
// const message = age >= 18 ? 'Вы можете купить алкоголь.' :
//   'Вы не можете купить алкоголь, вы слишком молоды.'
// console.log(message)
// alert(message)

/** Strict mode */
//'use strict'- строгий режим, избегать случайных ошибок
// 'use strict'
//
// let  hasCertificate = false
// const passExam = true
//
// if(passExam) hasCertificate = true
// if (hasCertificate) console.log('Wow!')
//
// const packAge = 'Video'

/** Функции - это кусок кода для использование его многократно
 * Don't Repeat Yourself DRY*/
//  function printTex() {
//   console.log('Hello to everyone!')
// }
// printTex()
// printTex()
// printTex()
// Number('42')
// const number = Number('42')
// console.log(number)
//==============================================
// function colorizer (item, color, colorCode) {
//  // console.log(item, color)
//  const colorizedItem = `The ${item} is ${color}. The code of the color is ${colorCode}!`
//  // console.log(colorizedItem)
//  return colorizedItem
// }
// const messageFromColorize = colorizer('desk' , 'red', 99)
// console.log(`We have the following message: ${messageFromColorize}`)
//
// const messageFromColorize2 = colorizer('hand' , 'green', 10)
// console.log(`We have the following message: ${messageFromColorize2}`)

/** Функция Declarations vs Expressions разница  */
//Declarations
// function getAge1(birthYear, yearNow){
//  // const age = yearNow - birthYear
//  return yearNow - birthYear
// }
// const myAge1 = getAge1(1997,2022)
// console.log(myAge1)
//
// //Expressions
// const getAge2 = function (birthYear, yearNow){
//  return yearNow - birthYear
// }
// const myAge2 = getAge2(1997,2022)
// console.log(myAge2)

/** Стрелочные функции arrow function */
// const getAge2 = function (birthYear, yearNow){
//  return yearNow - birthYear
// }
// const myAge2 = getAge2(1997,2022)
// console.log(myAge2)

//Пример стрелочной функции
// const getAge3 = (birthYear, yearNow) =>  yearNow - birthYear
// const myAge3 = getAge3(1948, 2022)
// console.log(myAge3)
//
// const canBuyAlcohol = (birthYear, yearNow) => {
//  const age = yearNow - birthYear
//  const isPersonOlderThan21 = age >= 21 ? true : false
//  return isPersonOlderThan21
// }
// console.log(canBuyAlcohol(2007, 2022))

/** Вызов функции внутри другой функции */
// function colorMixer(color1, color2){
//  const newColor = `${color1} + ${color2}.`
//  return newColor
// }
//
// function colorizer (item, color1, color2) {
//  const color = colorMixer(color1, color2)
//  const colorizedItem = `The ${item} is ${color}`
//  // console.log(colorizedItem)
//  return colorizedItem
// }
// const colorizedCar = colorizer('car', 'red', 'orange')
// console.log(colorizedCar)
//
// console.log(colorizer('house', 'brown', 'black'))

/** Задача */
 // const getAverage = (x, y , z) => (x + y + z) /3

// console.log(getAverage(1,2,3))

//The first quarter

// const dept1AverSales1 = getAverage(35467, 29842, 38501)
// const dept1AverSales2 = getAverage(70533, 50121, 33899)
// console.log(dept1AverSales1, dept1AverSales2)

// The second quarter
// const dept2AverSales1 = getAverage(50301, 21984, 19207)
// const dept2AverSales2 = getAverage(72381, 41562, 29465)
// console.log(dept2AverSales1, dept2AverSales2)
//
// const printBonus = function (dept2AverSales1, dept1AverSales2){
//   if(dept2AverSales1 > dept2AverSales2){
//    const diff = dept1AverSales - dept2AverSales
//    const percent = diff / dept2AverSales * 100
//    if(percent >= 30){
//     console.log(`Dept 1 will get a bonus of ${percent}%`)
//    }else {
//     console.log('No bonus in this quarter')
//    }
//   }
// }

/** Массивы */
// const color1 = 'red'
// const color2 = 'orange'
// const color3 = 'yellow'
// const color4 = 'green'
// const color5 = 'blue'
// const color6 = 'indigo'
// const color7 = 'violet'
//
// const rainbowColors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
// console.log(rainbowColors[2])
// console.log('The sky is ' + rainbowColors[4])
// rainbowColors[rainbowColors.length] = 'indigo'
//
// rainbowColors[5] = 'Dark blue'
//
// console.log(rainbowColors)
//
// console.log(rainbowColors)
// // const stringNumbers = []
// // stringNumbers[0] = 'one'
// // stringNumbers[1] = 'two'
// // stringNumbers[2] = 'three'
// const stringNumbers = new Array('one', 'two', 'three')
// console.log(stringNumbers)
//
// const numbers = [43, 42, 54, 65]
// console.log(numbers)
//
// const anyItems = [4, true, new Date(), 'something']
// console.log(anyItems)

/** Массив методы */
// const numbers = [23, 54, 4, 31, 11]
// let result

// result = numbers.length //Опеределяем длинну массива
//
// result = Array.isArray(numbers) //Узнаем является ли массивом
//
// result = numbers.indexOf(4) //Получем индекс массива
//
// //push() pop() метод добавляет элемент в конце массива
// result = numbers.push(7) //метод добавляет элемент в конце массива
// result = numbers.pop()//Убирает последний элемент в массиве
// result = numbers.pop()

//unshift()  shift() метод добавляют и удаляют элементы в начале массива
// result = numbers.unshift(3) //Добавляет элемент в начало
// result = numbers.shift()//Без парамтеров и удаляет первый элемент 3
//
// result = numbers.push(1, 22, 33)
// result = numbers.unshift(1, 22, 33)
// result = numbers.splice(1, 1) //метод сплайс означает срашивание удаляет несколько элементов указываем индекс
// result = numbers.splice(1, 3)
//
// result = numbers.reverse() //С этим методом можем развернуть массивы в обратном порядке
//
// result = numbers.slice(1, 4)
// result = numbers.concat(result)
//
//
//
// console.log(result)
// console.log(numbers)

//Задание
// const calculateTips = bill => bill < 20 ?  bill * 0.2 : bill * 0.15
//
// const bills = [11, 20, 47]
// const tips = [calculateTips(bills[0]), calculateTips(bills[1]), calculateTips(bills[2])]
// const totalBills = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]
// console.log(bills, tips, totalBills)

/** Объекты */
// myData = ['Avtan', 'Tursunbekov', 1997, 'Progamming', ['Chynara, Tamina']]
// console.log(myData[4])
//
// avtanObject = {
//  name: 'Avtan',
//  lastName: 'Tursunbekov',
//  birthYear: 1997,
//  job: 'Progaramming',
//  familyMembers: ['Chynara', 'Tamina']
// }
// /** Dot vs bracket Notation объекты обращения к данным */
// myData = [
//   'Avtandil',
//   'Tursunbekov',
//   1997,
//   'Programmer',
//   ['Chynara']
// ]
// console.log(myData)
//
// avtandilObject = {
//   name: 'Avtandil',
//   lastName: 'Tursunbekov',
//   birthYear: 1997,
//   job: 'Programmer',
//   familyMembers: ['Chynara', 'Tamina', 'Avtandil ']
// }
// console.log(avtandilObject)
// console.log(avtandilObject.name)
// console.log(avtandilObject['name'])
//
// const baseName = 'name'
// console.log(avtandilObject['last' + baseName])

// const userInput = prompt('What do you want to know about Avtandil? ' +
//   'Choose between name, lastname, birthYear, job,' +
//   ' familyMembers ')
// if(avtandilObject[userInput]){
//   console.log(avtandilObject[userInput])
// }else {
//   console.log('This property does not exist! Choose between name, lastname, birthYear, job, familyMembers')
// }

//=====================================================
// console.log(`${avtandilObject.name} has ${avtandilObject.familyMembers.length} family members  and the first one is
// ${avtandilObject.familyMembers[0]}`)

/** Объекты задание bmi index */
// const jack = {
//   firstName: 'Jack',
//   lastName: 'White',
//   weight: 91,
//   height: 1.93,
//   calcBmi: function (){
//     this.bmi = this.weight / this.height ** 2
//     return this.bmi
//   }
// }
//
// const mike = {
//   firstName: 'Mike',
//   lastName: 'Black',
//   weight: 91,
//   height: 1.93,
//   calcBmi: function (){
//     this.bmi = this.weight / this.height ** 2
//     return this.bmi
//   }
// }
//
// console.log(jack.calcBmi())
// console.log(jack.bmi)
//
// console.log(mike.calcBmi())
// console.log(mike.bmi)
//
//
// if (jack.bmi > mike.bmi) {
//   console.log(`${jack.firstName} ${jack.lastName} BMI (${jack.bmi}) is higer than
//   ${mike.firstName} ${mike.lastName} (${mike.bmi})!`)
// }else if (jack.bmi < mike.bmi) {
//   console.log(`${mike.firstName} ${mike.lastName} BMI (${mike.bmi}) is higer than
//   ${jack.firstName} ${jack.lastName} (${jack.bmi})!`)
// } else {
//   console.log(`${mike.firstName} ${mike.lastName} and ${jack.firstName} ${jack.lastName} BMI are equal (${mike.bmi})!`)
// }

/** For циклы */
// console.log('Push ups repetition 1')
// console.log('Push ups repetition 2')
// console.log('Push ups repetition 3')
// console.log('Push ups repetition 4')
// console.log('Push ups repetition 5')
// console.log('Push ups repetition 6')
// console.log('Push ups repetition 7')
// console.log('Push ups repetition 8')
// console.log('Push ups repetition 9')
// console.log('Push ups repetition 10')

// for (let rep = 1; rep <= 10; rep = rep += 1) {
//   console.log(`Push ups repetition ${rep}`)
//   console.log('Hello!')
// }
//
// console.log('Out of loop')



/** Итерация массива*/
// const user123 = ['Avtandil', 'Tursunbekov', 1997, 'developer', ['Chynara', 'Telegay'], false]
//
// const types = []
//
//
// for (let i = 0; i < user123.length; i++ ){
//   console.log(user123[i], typeof user123[i])
//   // types[i] = typeof user123[i]
//   // types.push(typeof user123[i])
//   // types.unshift(typeof user123[i])
// }
// console.log(types)
//===========================================
// const birthYears = [1948, 1952]
// const ages = []
//
// for(let i = 0; i < birthYears.length; i++){
//   ages.push(2022 - birthYears[i])
// }
// console.log(ages)
/** Continue and Break - продолжить и прервать */

// const user123 = ['Avtandil', 'Tursunbekov', 1997, 'developer', ['Chynara', 'Telegay'], false]

// for (let i = 0; i < user123.length; i++ ){
//   if(typeof user123[i] !== 'string') continue
//   console.log(user123[i], typeof user123[i])
// }

// for (const user of user123) {
//   if(typeof user !== 'string') continue
//   console.log(user, typeof user)
// }
// user123.forEach(user => console.log(user, typeof user))

// for (let i = 0; i < user123.length; i++ ){
//   if(typeof user123[i] === 'number') break
//   console.log(user123[i], typeof user123[i])
// }

/** Итерация в обратном порядке */

// console.log('BACKWARDS ITERATION')
//
// const user123 = ['Avtandil', 'Tursunbekov', 1997, 'developer', ['Chynara', 'Telegay']]
//
// for(let i = user123.length - 1; i >= 0; i--){
//   console.log(i,user123[i])
// }
//
// console.log('LOOP IN LOOP')
//
// for (let exercise = 1; exercise <= 3; exercise++){
//   console.log(`Exercise ${exercise}`)
//
//   for (let rep= 1; rep <= 5; rep++){
//     console.log(`Rep ${rep}`)
//   }
// }
// let name = 'Jack';
// console.log(name)
// name = 'Jane'
// console.log(name)
// let color
// console.log(color)
// color = 'Red'
// console.log(color)

// const name = 'Jack'
// console.log(name)
// name = 'Jane'
//
// const color = 'Red'

// let x = 'something'
// console.log(x)
// x = 3
// console.log(x)

//Primitive data types

//String

// let someText
// console.log(typeof someText)
// let age = 25
// let name = 'Avtandil'
// console.log(age, name)
// age = 26
// console.log(age, name)

// const objectA = {
//  a: 10,
//  b: true
// }
// // console.log(objectA)
//
// const copyOfA = objectA
// copyOfA.c = 'abc'
// copyOfA.d = undefined
// console.log(copyOfA)

// const nameCopy = {
//  a: 25,
//  b: 'Tursunbekov'
// }
// console.log(nameCopy)
//
// const lastCopy = nameCopy
// lastCopy.c = 'Avtandil'
// lastCopy.d = 'man'
//
// console.log(lastCopy)

// const a = () => {
//  console.log('Hey there')
// }
// a()
//
// a = 10
//
// a()

// const myCity = {
//  city: 'New York'
// }
// myCity.popular = true
// // console.log(myCity)
// myCity.country = 'USA'
// console.log(myCity)

const myCity = {
 city: 'Bishkek'
}
console.log(myCity)

myCity.popular = true
console.log(myCity)
myCity.country = 'Kyrgyzstan'
console.log(myCity)


























