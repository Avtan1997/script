// 1)Определение 2) Какие проблемы решают промисы 3)аналоги преимушества не достатки
console.log('Request data...')

// setTimeout(() =>{
//     console.log('Preparing data...')
//
//     const backendData = {
//         server: 'aws',
//         port: 2000,
//         status: 'working'
//     }
//
//     setTimeout(() => {
//         backendData.modified = true
//         console.log('Data received', backendData)
//     }, 2000)
// },2000)

const p = new Promise(function (resolve, reject) { // new всегда дает объект{}
    setTimeout(() => {
        console.log('Preparing data...')
        const backendData = {
            server: 'aws',
            port: 2000,
            status: 'working'
        }
        resolve(backendData)
    }, 2000)
})
// todo: replace protected to private
p.then((data) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            data.modified = true
            resolve(data)
            // console.log('Data received', backendData)
        }, 2000)
    }).then(cliendData => {
        console.log('Data received', cliendData)
        cliendData.fromPromise = true
        return cliendData
    })
        .then(data => {
            console.log('Modified', data)
        })
})
