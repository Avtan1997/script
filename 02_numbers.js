// Number
// const num = 42//integer цело численный тип
// const float = 42.42 // float чило содержит дяситичную часть
// const pow = 10e3//Константа pow
// console.log('MAX_SAFE_INTEGER',Number.MAX_SAFE_INTEGER) // Максимальное число JS integer 9007199254740991
// console.log('Math.pow 53', Math.pow(2, 53 ) -1) // Math глобальный объект есть функция pow которая позволяет возвести какое то число в степень
// console.log('MIN_SAFE_INTEGER', Number.MIN_SAFE_INTEGER)
// console.log('MAX_VALUE',Number.MAX_VALUE)
// console.log('MIN_VALUE',Number.MIN_VALUE)
// console.log('POSITIVE_INFINITY',Number.POSITIVE_INFINITY)
// console.log('NEGATIVE_INFINITY',Number.NEGATIVE_INFINITY)
// console.log('2/0', 2/0)
// console.log(Number.NaN) // Not A Number
// console.log(typeof NaN)
//
// console.log(0.4 + 0.2)
//
// console.log(+(0.4 + 0.2).toFixed(1))
// console.log(parseFloat((0.4 + 0.2).toFixed(1)))

//2 Bigint тип данных
// console.log( 9007199254740991999999n - 900719925474099199999n)
// console.log( -9007199254740991999999n)
// console.log( 9007199254740991999999.5365635n)error
// console.log(10n - 4)// error
// console.log(parseInt(10n) - 4)
// console.log(10n -BigInt(4) )
// console.log(5n / 2n) //2n

// //3 Math
// console.log(Math.E) // Экспонента там где потребуется
// console.log(Math.PI) //для вичесления радиуса PI
//
// console.log(Math.sqrt(25)) //
// console.log(Math.pow(5, 3)) //
// console.log(Math.abs(-42)) //
// console.log(Math.max(42, 12, 23, 11, 422)) //показывает максимальное значение 422
// console.log(Math.min(42, 12, 23, 11, 422)) // показывает минимальное значение 11
// console.log(Math.floor(4.9)) //floar округляет всегда нишую сторону 4
// console.log(Math.ceil(4.9)) //ceil всегда ркпугляет в большую сторону 9
// console.log(Math.round(4.9)) // возрашает число, округленному к ближайшему целому 5
// console.log(Math.trunc(4.9)) //Возврашает целую часть путем удаление всех дробных знаков. 4
// console.log(Math.random()) //Рандом не принимает ни каких параметров но выдает рандомные значение и числа

//4 Example как использовать Math

//Создаем функцию которая нам будет возрашать случайное число в диапозоне 2 целое число
// function getRandomBetween(min, max) {
//     return Math.floor(Math.random() * (max - min) + min)
// }
//
// console.log(getRandomBetween(10, 42))





