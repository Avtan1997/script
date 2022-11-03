/** For циклы */
//Плохой пример кода
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

// for(let rep = 1; rep <= 10; rep = rep + 2){
//   console.log(`Push ups repetition ${rep}`)
//   console.log('Hello!')
// }
//
// console.log('Out of loop!')

/** Итерация Массивов, перебирание элементов массива*/
// const user123 = ['Avtandil', 'Tursunbekov', 1997, 'developer', ['Chynara,', 'Tamina'], false]
//
// const types = []
//
// for(let i = 0; i < user123.length; i++ ){
//   console.log(user123[i], typeof user123[i])

  // types[i] = typeof user123[i]
  // types.push(typeof user123[i])
//   types.unshift(typeof user123[i])
//
// }
//
// console.log(types)

/** циклы и массивы */
// const birthyears = [1997, 1998, 1948, 1952];
// const ages = [];
//
// for (let i = 0; i < birthyears.length; i++){
//   ages.push(2022 - birthyears[i])
// }
// console.log(ages)

/** continue и break */

// const user123 = ['Avtandil', 'Tursunbekov', 1997, 'developer', ['Chynara,', 'Tamina'], false]
//
// console.log('CONTINUE EXAMPLE')
//
// for(let i = 0; i < user123.length; i++ ){
//   if (typeof user123[i] !== 'string') continue;
//   console.log(user123[i], typeof user123[i])
// }
//
// console.log('BREAK EXAMPLE')
//
// for(let i = 0; i < user123.length; i++ ){
//   if (typeof user123[i] === 'number') break;
//   console.log(user123[i], typeof user123[i])
// }

/** Итерация в обратном порядке. Циклы в цикле.*/

// const user123 = ['Avtandil', 'Tursunbekov', 1997, 'developer', ['Chynara,', 'Tamina']]
//
// for (let i = user123.length - 1; i >= 0; i--){
//   console.log(i,user123[i])
// }

/**backwards iteration & Цикл в циклах */

// console.log('BACKWARDS ITERATION')
//
// const user123 = ['Avtandil', 'Tursunbekov', 1997, 'developer', ['Chynara,', 'Tamina']]
//
// for (let i = user123.length - 1; i >= 0; i--){
//   console.log(i,user123[i])
// }
//
// console.log('LOOP IN LOOP')
//
// for (let exercise = 1; exercise <= 3; exercise++){
//   console.log(`Exercise ${exercise}`)
//
//   for (let rep = 1; rep <= 5; rep++){
//     console.log(`Ex ${exercise} Rep ${rep}`)
//   }
//   console.log('Out of inner loop')
//
// }
// console.log('Out of outer loop')

/** Цикл While */
  console.log('FOR LOOP')
  for (let rep = 1; rep <= 10; rep++){ //for переводится "Для"
    console.log(`Push ups repetition ${rep}`)
  }

  console.log('WHILE LOOP')
  let rep = 1;

  while (rep <= 10){  //while переводится "Пока"
    console.log(`Push ups repetition ${rep}`)
    rep++
  }









