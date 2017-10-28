function fizzbuzz(num) {
	if (num % 3 !== 0 && num % 5 !== 0) {
		return num;
	} else if (num % 3 === 0 && num % 5 !== 0) {
		return "Fizz";
	} else if (num % 5 === 0 && num % 3 !== 0) {
		return "Bazz";
	} else {
		return "FizzBazz";
	}
}

module.exports = fizzbuzz;
