// This behavior is broken and does not match the book's examples.

let Dog = (name, furColor, weight, squirrelsEaten) => {
    this.name = name
    this.furColor = furColor
    this.weight = weight
    this.squirrelsEaten = squirrelsEaten
    this.bark = (numBarks) => {
        for (let i = 0; i < numBarks; ++i)
            console.log(this.name, 'says bark')
    }
    return this
}

let dogA = Dog('Kevin', 'Black', 110, 9001)
let dogB = Dog('Daisy', 'Brindled', 50, 10)

console.log(dogA.furColor)
console.log(dogB.squirrelsEaten)

dogA.bark(10)
dogB.bark(1)
