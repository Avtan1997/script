const fs = require('fs');
const fsp = require('fs/promises')
console.log('Start')
const fileContent = fs.readFileSync('txt.txt', 'utf8');
console.log(fileContent)
console.log('midlle')

async function read(path) {
    const data = await fsp.readFile(path, "utf-8")
    console.log(data)
}

read('txt.txt').then()

console.log('End')


// import {} from './txt.txt'
// console.log()


// const  fsp = require('fs/promises')
// const fs = require('fs')


// const value = require('./export')
// console.log(value.someFunc())
// console.log(value.someFunc2())