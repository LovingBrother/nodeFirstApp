const numbers = [3, 5, 7, 9, 11, 13, 15, 17, 19, 21]

squared = x => x**x // pure function to get 

// Get the square of all numbers in the array
const squaredNumbers = numbers.map(squared)
console.log(`Squared numbers: `)
console.table(squaredNumbers)

// Use reduce HOF to get the sum of all squared values
const sumOfSquares = squaredNumbers.reduce((previous, current) => previous + current, 0)
console.log(`Sum of squares: ${sumOfSquares}`)

// Use built-in Math library function to get square root of value
const rootedSumOfSquares = Math.sqrt(sumOfSquares)
console.log(`Square rooted sum of squares: ${rootedSumOfSquares}`)