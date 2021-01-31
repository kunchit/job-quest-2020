const { fib } = require('./fib');
const { shift } = require('./shift');
const { secondMax } = require('./secondMax');
const { fizzBuzz } = require('./fizzBuzz');

console.log('---fib---')
console.log(fib(1))
console.log(fib(3))
console.log(fib(12))
console.log('---end---\n')

console.log('---shift---')
console.log(shift(['john', 'jane', 'sarah', 'alex'], 'left', 2))
console.log(shift([1, 2, 3, 4, 5], 'right', 3))
console.log('---end---\n')

console.log('---secondMax---')
console.log(secondMax([2, 3, 4, 5]))
console.log(secondMax([9, 2, 21, 21]))
console.log(secondMax([4, 4, 4, 4]))
console.log(secondMax([4123]))
console.log(secondMax([]))
console.log('---end---\n')

console.log('---fizzBuzz---')
console.log(fizzBuzz(21))
console.log(fizzBuzz(25))
console.log(fizzBuzz(45))
console.log('---end---')