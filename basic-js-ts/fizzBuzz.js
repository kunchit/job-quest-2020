function fizzBuzz(positiveNumber) {

    const word = {
        3: 'Fizz',
        5: 'Buzz',
        15: 'FizzBuzz'
    };

    const Fizz = positiveNumber % 3 + 3
    const Buzz = positiveNumber % 5 + 5

    const FizzBuzz = Fizz * Buzz

    return word[FizzBuzz] || word[Fizz] || word[Buzz]
}

module.exports = {
    fizzBuzz
}