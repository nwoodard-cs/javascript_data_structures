let globalVar = 'Global'

let changeGlobalRedeclare = () => {
    let globalVar = 'Local' // This creates a locally scoped variable
    return globalVar
}

let changeGlobalReassign = () => {
    globalVar = 'Local' // This alters the global variable
    return globalVar
}

console.log(globalVar)
console.log(changeGlobalRedeclare())
console.log(globalVar)
console.log(changeGlobalReassign())
console.log(globalVar)
