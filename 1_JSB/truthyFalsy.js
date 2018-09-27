let isTruthy = (val) => {
    return val ? true : false
}

console.log(isTruthy(null))
console.log(isTruthy(3))
console.log(isTruthy('false'))
console.log(isTruthy(''))
console.log(isTruthy())
console.log(isTruthy([]))
console.log(isTruthy(new Set()))
console.log(isTruthy(0))