const test = require('tape')
const fizzbuzz = require('../fizzbuzz')

test('should return number if not divisible by 3 or 5', function (t) {
  let actual = fizzbuzz(1)
  let expected = 1
  t.equals(actual, expected, 'returns a number')

  actual = fizzbuzz(2)
  expected = 2
  t.equals(actual, expected, 'returns a number')

  actual = fizzbuzz(4)
  expected = 4
  t.equals(actual, expected, 'returns a number')

  actual = fizzbuzz(7)
  expected = 7
  t.equals(actual, expected, 'returns a number')

  t.end()
})

test("should return 'Fizz' if divisible by 3 and not divisible by 5", function (t) {
  let actual = fizzbuzz(3)
  let expected = 'Fizz'
  t.equals(actual, expected, 'returns Fizz')

  actual = fizzbuzz(6)
  expected = 'Fizz'
  t.equals(actual, expected, 'returns Fizz')

  actual = fizzbuzz(9)
  expected = 'Fizz'
  t.equals(actual, expected, 'returns Fizz')

  actual = fizzbuzz(33)
  expected = 'Fizz'
  t.equals(actual, expected, 'returns Fizz')

  t.end()
})

test("should return 'Buzz' if divisible by 5 and not divisible by 3", function (t) {
  let actual = fizzbuzz(5)
  let expected = 'Buzz'
  t.equals(actual, expected, "returns 'Buzz'")

  actual = fizzbuzz(10)
  expected = 'Buzz'
  t.equals(actual, expected, "returns 'Buzz'")

  actual = fizzbuzz(35)
  expected = 'Buzz'
  t.equals(actual, expected, "returns 'Buzz'")

  actual = fizzbuzz(50)
  expected = 'Buzz'
  t.equals(actual, expected, "returns 'Buzz'")

  actual = fizzbuzz(250)
  expected = 'Buzz'
  t.equals(actual, expected, "returns 'Buzz'")

  t.end()
})

test("should return 'FizzBuzz' if divisible by 5 and divisible by 3", function (t) {
  let actual = fizzbuzz(15)
  let expected = 'FizzBuzz'
  t.equals(actual, expected, "returns 'FizzBuzz'")

  actual = fizzbuzz(30)
  expected = 'FizzBuzz'
  t.equals(actual, expected, "returns 'FizzBuzz'")

  actual = fizzbuzz(45)
  expected = 'FizzBuzz'
  t.equals(actual, expected, "returns 'FizzBuzz'")

  actual = fizzbuzz(450)
  expected = 'FizzBuzz'
  t.equals(actual, expected, "returns 'FizzBuzz'")

  actual = fizzbuzz(600)
  expected = 'FizzBuzz'
  t.equals(actual, expected, "returns 'FizzBuzz'")

  t.end()
})
