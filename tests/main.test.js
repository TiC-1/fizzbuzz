const test = require('tape')
const fizzbuzz = require('../fizzbuzz')
const { numArrDivisibleBy3, numArrDivisibleBy5, numArrDivisibleBy3and5, numArrNotDivisibleBy3or5 } = require('../numArrayGenerator')

test('returns fizz for numbers divisible by 3', (t) => {
  let arr = numArrDivisibleBy3(50)
  arr.forEach((number) => {
    t.equals(fizzbuzz(number), 'Fizz', 'fizzbuzz(' + number + ") should return 'Fizz'")
  })
  t.end()
})

test('returns buzz for numbers divisible by 5', (t) => {
  let arr = numArrDivisibleBy5(50)
  arr.forEach((number) => {
    t.equals(fizzbuzz(number), 'Buzz', 'fizzbuzz(' + number + ") should return 'Buzz'")
  })
  t.end()
})

test('returns fizzbuzz for numbers divisible by 3 and 5', (t) => {
  let arr = numArrDivisibleBy3and5(50)
  arr.forEach((number) => {
    t.equals(fizzbuzz(number), 'FizzBuzz', 'fizzbuzz(' + number + ") should return 'FizzBuzz'")
  })
  t.end()
})

test('returns number for numbers not divisible by 3 or 5', (t) => {
  let arr = numArrNotDivisibleBy3or5(50)
  arr.forEach((number) => {
    t.equals(fizzbuzz(number), number, 'fizzbuzz(' + number + ') should return ' + number)
  })
  t.end()
})
