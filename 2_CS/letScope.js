let animal = 'dog'

let makeCow = () => {
    let animal = 'cow'
    return animal
}

let makeCat = () => {
    animal = 'cat'
    return animal
}

console.log(animal)
console.log(makeCow())
console.log(animal)
console.log(makeCat())
console.log(animal)

