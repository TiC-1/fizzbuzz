const test = require("tape");
const fizzbuzz = require("../fizzbuzz");

test('should return number if not divisible by 3 or 5', function(t) {
  t.equals(fizzbuzz(1), 1, 'fizzbuzz(1) should return 1');
  t.equals(fizzbuzz(2), 2, 'fizzbuzz(2) should return 2');
  t.equals(fizzbuzz(4), 4, 'fizzbuzz(4) should return 4');
  t.equals(fizzbuzz(7), 7, 'fizzbuzz(7) should return 7');
  t.end();
});

test("should return 'Fizz' if divisible by 3 and not divisible by 5", function(t) {
  t.equals(fizzbuzz(3), 'Fizz', "fizzbuzz(3) should return 'Fizz'");
  t.equals(fizzbuzz(6), 'Fizz', "fizzbuzz(6) should return 'Fizz");
  t.equals(fizzbuzz(9), 'Fizz', "fizzbuzz(9) should return 'Fizz");
  t.equals(fizzbuzz(33), 'Fizz', "fizzbuzz(33) should return 'Fizz");
  t.end();
});

test("should return 'Buzz' if divisible by 5 and not divisible by 3", function(t) {
  t.equals(fizzbuzz(5), 'Buzz', "fizzbuzz(5) should return 'Buzz'");
  t.equals(fizzbuzz(10), 'Buzz', "fizzbuzz(10) should return 'Buzz'");
  t.equals(fizzbuzz(35), 'Buzz', "fizzbuzz(35) should return 'Buzz'");
  t.equals(fizzbuzz(50), 'Buzz', "fizzbuzz(50) should return 'Buzz'");
  t.equals(fizzbuzz(250), 'Buzz', "fizzbuzz(250) should return 'Buzz'");
  t.end();
});
