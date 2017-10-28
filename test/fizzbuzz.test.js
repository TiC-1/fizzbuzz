/* TODO */
const test = require("tape");
const fizzbuzz = require("../fizzbuzz");
// require 'fizzbuzz.js'

// write tape tests

test("tape is working", function(t) {
	t.equals(1,1,"one equals one");
	t.end();
});

test("should return number if not divisible by 3 or 5", function(t) {
	t.equals(fizzbuzz(1), 1, "fizzbuzz(1) should return 1");
	t.equals(fizzbuzz(2), 2, "fizzbuzz(2) should return 2");
	t.equals(fizzbuzz(4), 4, "fizzbuzz(4) should return 4");
	t.equals(fizzbuzz(7), 7, "fizzbuzz(7) should return 7");
	t.end();
});

test("should return 'Fizz' if divisible by 3 and not divisible by 5", function(t) {
	t.equals(fizzbuzz(3), "Fizz", "fizzbuzz(3) should return 'Fizz'");
	t.equals(fizzbuzz(6), "Fizz", "fizzbuzz(6) should return 'Fizz");
	t.equals(fizzbuzz(9), "Fizz", "fizzbuzz(9) should return 'Fizz");
	t.equals(fizzbuzz(33), "Fizz", "fizzbuzz(33) should return 'Fizz");
	t.end();
});

test("should return 'Bazz' if divisible by 5 and not divisible by 3", function(t) {
	t.equals(fizzbuzz(5), "Bazz", "fizzbuzz(5) should return 'Bazz'");
	t.equals(fizzbuzz(10), "Bazz", "fizzbuzz(10) should return 'Bazz'");
	t.equals(fizzbuzz(35), "Bazz", "fizzbuzz(35) should return 'Bazz'");
	t.equals(fizzbuzz(50), "Bazz", "fizzbuzz(50) should return 'Bazz'");
	t.equals(fizzbuzz(250), "Bazz", "fizzbuzz(250) should return 'Bazz'");
	t.end();
});

test("should return 'FizzBazz' if divisible by 5 and divisible by 3", function(t) {
	t.equals(fizzbuzz(15), "FizzBazz", "fizzbuzz(15) should return 'FizzBazz'");
	t.equals(fizzbuzz(30), "FizzBazz", "fizzbuzz(30) should return 'FizzBazz'");
	t.equals(fizzbuzz(45), "FizzBazz", "fizzbuzz(45) should return 'FizzBazz'");
	t.equals(fizzbuzz(450), "FizzBazz", "fizzbuzz(450) should return 'FizzBazz'");
	t.equals(fizzbuzz(600), "FizzBazz", "fizzbuzz(600) should return 'FizzBazz'");
	t.end();
});