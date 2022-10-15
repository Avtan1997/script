//Прототипы - это механизм, с помощью которого объекты JavaScript наследуют свойства друг от друга.
const Animal = function (options){
    this.name = options.name
    this.color = options.color

    this.voice = function (){
        console.log('Base voice from', this.name)
    }
}

// Animal.prototype.voice = function (){
//     console.log('Base voice from', this.name)
// }

console.log(Animal.prototype)


const  dog = new Animal({name: 'Rex', color: '#fff'})

dog.voice()

