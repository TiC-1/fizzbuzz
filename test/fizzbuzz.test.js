const test = require("tape");
const fizzbuzz = require("../fizzbuzz");

test("tape is working", function(t){
  t.equals(fizzbuzz(0), "fizzbuzz", "0 => fizzbuzz");
	t.equals(fizzbuzz(1), 1, "1 => 1");
	t.equals(fizzbuzz(2), 2, "2 => 2");
	t.equals(fizzbuzz(4567), 4567, "4567 => 4567");
	t.equals(fizzbuzz(3), "fizz", "3 => fizz");
	t.equals(fizzbuzz(9), "fizz", "9 => fizz");
	t.equals(fizzbuzz(5), "buzz", "5 => buzz");
	t.equals(fizzbuzz(25), "buzz", "25 => buzz");
	t.equals(fizzbuzz(15), "fizzbuzz", "15 => fizzbuzz");
	t.equals(fizzbuzz(60), "fizzbuzz", "60 => fizzbuzz");
	t.end();
});
