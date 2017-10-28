## Task

Use TDD to write a function that will take a number as an argument and returns 'Fizz' if the number is divisible by 3, 'Buzz' if the number is divisible by 5 and 'FizzBuzz' if the number is divisible by both 3 and 5. If the number is neither divisible by 3 or 5, then return the number.

### For example:

```fizzbuzz(1) => 1
fizzbuzz(2) => 2
fizzbuzz(3) => 'Fizz'
fizzbuzz(4) => 4
fizzbuzz(5) => 'Buzz'
fizzbuzz(6) => 'Fizz'
...
fizzbuzz(15) => 'FizzBuzz'
```

## Setup

Let's set up our file structure and use npm to setup our project to use tape

Using the terminal:

1. Create a new folder called fizzbuzz and change directory into it

```
mkdir fizzbuzz && cd fizzbuzz
```

2. Add a file called fizzbuzz.js

```
touch fizzbuzz.js
```

3. Create a tests folder and change directory into tests

```
mkdir tests && cd tests
```

4. Inside tests folder, create a file called fizzbuzz.test.js

```
touch fizzbuzz.test.js
```
5. change into fizzbuzz directory

```
cd ..
```
6. Create package.json using npm (skip through questions by pressing enter)

```
npm init
```
7. Install Tape and tap-spec using npm, and save as a development dependency

```
npm install --save-dev tape tap-spec
```

8. In our package.json, under scripts add "tape ./test/*.test.js | tap-spec" like the following:

```
"scripts": {
  "test": "tape ./tests/*.test.js | tap-spec"
},
```

9. Type the following code to fizzbuzz.js

```
function fizzbuzz(num) {

}

module.exports = fizzbuzz;
```

10. Inside fizzbuzz.test.js type the following code (do not copy paste!):

```
const test = require('tape');
const fizzbuzz = require('../fizzbuzz.js');

test('tape is working', function(t) {
  t.equals(1, 1, 'one should equal one');
  t.end();
})
```

11. Check that the tests are working, by running them using npm:

```
npm run test
```

You should see the following output in your terminal output:
```
tape is working

    ✔ one should equal one
```

Great work, you have now successfully set up npm to run tests using tape. 

## Case: return a number, when the number is not divisible by 3 or 5 

Let's write some tests to check if our function returns the number when the number is not divisible by 3 or 5.

1. Let's write a failing test. Type the following into fizzbuzz.test.js:

```
test('should return num if not divisible by 3 or 5', function(t) {
  t.equals(fizzbuzz(1), 1, 'fizzbuzz(1) should return 1');
  t.end();
})
```

2. type npm run test and watch it fail

```
tape is working

    ✔ one should equal one

  fizzbuzz


    ✖ fizzbuzz(1) should return 1
    --------------------
      operator: equal
      expected: 1
      actual:   undefined
      at: Test.<anonymous> (/Users/username/fizzbuzz/tests/fizzbuzz.test.js:10:5)
      stack: |-




  Failed Tests: There was 1 failure

    fizzbuzz

      ✖ fizzbuzz(1) should return 1


  total:     2
  passing:   1
  failing:   1
  duration:  20ms
```

3. Inside fizzbuzz.js, write the minimum amount of code so that the test passes as follows:

```
function fizzbuzz(num) {
  if (num === 1) return 1
}

module.exports = fizzbuzz;
```

4. run 'npm run test' again
```
npm run test
```

The tests should now pass like the following:
```
tape is working

    ✔ one equals one

  fizzbuzz

    ✔ fizzbuzz(1) should return 1


  total:     2
  passing:   2
  duration:  17ms
```
5. Let's add a few more tests, in fizzbuzz.test.js:

```
test('should return number if not divisible by 3 or 5', function(t) {
  t.equals(fizzbuzz(1), 1, 'fizzbuzz(1) should return 1');
  t.equals(fizzbuzz(2), 2, 'fizzbuzz(2) should return 2');
  t.equals(fizzbuzz(4), 4, 'fizzbuzz(4) should return 4');
  t.equals(fizzbuzz(7), 7, 'fizzbuzz(7) should return 7');
  t.end();
})
```

6. Let's make these tests pass, in fizzbuzz.js:

```
function fizzbuzz(num) {
  if (num === 1) return 1;
  else if (num === 2) return 2;
  else if (num === 4) return 4;
  else if (num === 7) return 7;
}

module.exports = fizzbuzz;
```

7. npm run test, watch the tests pass.

```
  tape is working

    ✔ 1 equals 1

  should return number if not divisible by 3 or 5

    ✔ fizzbuzz(1) should return 1
    ✔ fizzbuzz(2) should return 2
    ✔ fizzbuzz(4) should return 4
    ✔ fizzbuzz(7) should return 7


  total:     5
  passing:   5
  duration:  16ms
  ```


8. These if statements are getting very tiresome, especially if we need to deal with a larger range of numbers (e.g between 1 and 10,000). Wouldn't it better to refactor our code so it takes into account any number that isn't divisible by 3 or 5?

The remainder operator returns the remainder left over when one operand is divided by a second operand
[See here for more info](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators)

We can use the remainder operator to check if a number is divisible by another number.

Examples:
```
10 % 2    // 0
11 % 2    // 1
```

If the remainder is zero then we know that the second operand is a divisor of the first operand. e.g 10 % 2 equals zero, which means 10 is divided by 2 with no remainder left over. We can also check if the second operand is not a divisor of the first operand e.g 11 % 2 equals 1, which is not equal to zero.

We can use this in our code to check if a number is not divisible by 3 AND is not divisible by 5. In fizzbuzz.js, refactor as follows:

```
function fizzbuzz(num) {
  if (num % 3 !== 0 && num % 5 !== 0) {
    return num
  }
}

module.exports = fizzbuzz;
```

9. npm run test
```
npm run test
```
We should see the tests passing.

## Case: Return 'Fizz' when number is divisible by 3 and not divisible by 5

Let's write some tests to check if our function returns 'Fizz' when number is divisible by 3 and NOT divisible by 5.

1. Let's create some new tests for this edge case:

```
test("should return 'Fizz' if divisible by 3 and not divisible by 5", function(t) {
  t.equals(fizzbuzz(3), 'Fizz', "fizzbuzz(3) should return 'Fizz'");
  t.equals(fizzbuzz(6), 'Fizz', "fizzbuzz(6) should return 'Fizz");
  t.equals(fizzbuzz(9), 'Fizz', "fizzbuzz(9) should return 'Fizz");
  t.equals(fizzbuzz(33), 'Fizz', "fizzbuzz(33) should return 'Fizz");
  t.end();
})
```

2. Watch the tests fail by doing:
```
npm run test
```
In your terminal you should see similar output as shown below:
```
tape is working

    ✔ one equals one

  should return number if not divisible by 3 or 5

    ✔ fizzbuzz(1) should return 1
    ✔ fizzbuzz(2) should return 2
    ✔ fizzbuzz(4) should return 4
    ✔ fizzbuzz(7) should return 7

  should return 'Fizz' if divisible by 3 and not divisible by 5


    ✖ fizzbuzz(3) should return 'Fizz'
    -----------------------------------
      operator: equal
      expected: 'Fizz'
      actual:   undefined
      at: Test.<anonymous> (/Users/username/fizzbuzz/test/fizzbuzz.test.js:22:4)
      stack: |-


    ✖ fizzbuzz(6) should return 'Fizz
    ----------------------------------
      operator: equal
      expected: 'Fizz'
      actual:   undefined
      at: Test.<anonymous> (/Users/username/fizzbuzz/test/fizzbuzz.test.js:23:4)
      stack: |-


    ✖ fizzbuzz(9) should return 'Fizz
    ----------------------------------
      operator: equal
      expected: 'Fizz'
      actual:   undefined
      at: Test.<anonymous> (/Users/username/fizzbuzz/test/fizzbuzz.test.js:24:4)
      stack: |-


    ✖ fizzbuzz(33) should return 'Fizz
    -----------------------------------
      operator: equal
      expected: 'Fizz'
      actual:   undefined
      at: Test.<anonymous> (/Users/username/fizzbuzz/test/fizzbuzz.test.js:25:4)
      stack: |-




  Failed Tests: There were 4 failures

    should return 'Fizz' if divisible by 3 and not divisible by 5

      ✖ fizzbuzz(3) should return 'Fizz'
      ✖ fizzbuzz(6) should return 'Fizz
      ✖ fizzbuzz(9) should return 'Fizz
      ✖ fizzbuzz(33) should return 'Fizz


  total:     9
  passing:   5
  failing:   4
  duration:  23ms
  ```

Woah! A lot of errors. But don't worry, these error messages will help us understand what went wrong

```
expected: 'Fizz'
actual:   undefined
```
In all the error messages, tape is telling us that it expected 'Fizz' but the actual value that was returned from our fizzbuzz function was undefined. This is because we haven't written the code to deal with this edge case yet, so by default our function returns undefined.

3. Now write some code to make the tests pass. Inside fizzbuzz.js, type the following:

```
function fizzbuzz(num) {
  if (num % 3 !== 0 && num % 5 !== 0) {
    return num
  } else if (num % 3 === 0 && num % 5 !== 0) {
    return 'Fizz'
  }
}

module.exports = fizzbuzz;
```

Now run the tests again using:
```
npm run test
```

You should see the following output:

```
tape is working

    ✔ one equals one

  should return number if not divisible by 3 or 5

    ✔ fizzbuzz(1) should return 1
    ✔ fizzbuzz(2) should return 2
    ✔ fizzbuzz(4) should return 4
    ✔ fizzbuzz(7) should return 7

  should return 'Fizz' if divisible by 3 and not divisible by 5

    ✔ fizzbuzz(3) should return 'Fizz'
    ✔ fizzbuzz(6) should return 'Fizz
    ✔ fizzbuzz(9) should return 'Fizz
    ✔ fizzbuzz(33) should return 'Fizz


  total:     9
  passing:   9
  duration:  19ms

  ```

  Yes! It worked :)

## Case: Return 'Buzz' when number is divisible by 5 and not divisible by 3

1. Let's write some tests to check if our function returns 'Buzz' when number is divisible by 5 and NOT divisible by 3.

Let's create some new tests for this edge case:

```
test("should return 'Buzz' if divisible by 5 and not divisible by 3", function(t) {
  t.equals(fizzbuzz(5), 'Buzz', "fizzbuzz(5) should return 'Buzz'");
  t.equals(fizzbuzz(10), 'Buzz', "fizzbuzz(10) should return 'Buzz'");
  t.equals(fizzbuzz(35), 'Buzz', "fizzbuzz(35) should return 'Buzz'");
  t.equals(fizzbuzz(50), 'Buzz', "fizzbuzz(50) should return 'Buzz'");
  t.equals(fizzbuzz(250), 'Buzz', "fizzbuzz(250) should return 'Buzz'");
  t.end();
})
```

2. Watch the tests fail by doing:
```
npm run test
```
Output:
```
tape is working

    ✔ one equals one

  should return number if not divisible by 3 or 5

    ✔ fizzbuzz(1) should return 1
    ✔ fizzbuzz(2) should return 2
    ✔ fizzbuzz(4) should return 4
    ✔ fizzbuzz(7) should return 7

  should return 'Fizz' if divisible by 3 and not divisible by 5

    ✔ fizzbuzz(3) should return 'Fizz'
    ✔ fizzbuzz(6) should return 'Fizz
    ✔ fizzbuzz(9) should return 'Fizz
    ✔ fizzbuzz(33) should return 'Fizz

  should return 'Buzz' if divisible by 5 and not divisible by 3


    ✖ fizzbuzz(5) should return 'Buzz'
    -----------------------------------
      operator: equal
      expected: 'Buzz'
      actual:   undefined
      at: Test.<anonymous> (/Users/username/fizzbuzz/test/fizzbuzz.test.js:30:4)
      stack: |-


    ✖ fizzbuzz(10) should return 'Buzz'
    ------------------------------------
      operator: equal
      expected: 'Buzz'
      actual:   undefined
      at: Test.<anonymous> (/Users/username/fizzbuzz/test/fizzbuzz.test.js:31:4)
      stack: |-


    ✖ fizzbuzz(35) should return 'Buzz'
    -----------------------------------
      operator: equal
      expected: 'Buzz'
      actual:   undefined
      at: Test.<anonymous> (/Users/username/fizzbuzz/test/fizzbuzz.test.js:32:4)
      stack: |-


    ✖ fizzbuzz(50) should return 'Buzz'
    -----------------------------------
      operator: equal
      expected: 'Buzz'
      actual:   undefined
      at: Test.<anonymous> (/Users/username/fizzbuzz/test/fizzbuzz.test.js:33:4)
      stack: |-


    ✖ fizzbuzz(250) should return 'Buzz'
    -----------------------------------
      operator: equal
      expected: 'Buzz'
      actual:   undefined
      at: Test.<anonymous> (/Users/username/fizzbuzz/test/fizzbuzz.test.js:34:4)
      stack: |-




  Failed Tests: There were 5 failures

    should return 'Buzz' if divisible by 5 and not divisible by 3

      ✖ fizzbuzz(5) should return 'Buzz'
      ✖ fizzbuzz(10) should return 'Buzz'
      ✖ fizzbuzz(35) should return 'Buzz'
      ✖ fizzbuzz(50) should return 'Buzz'
      ✖ fizzbuzz(250) should return 'Buzz'


  total:     14
  passing:   9
  failing:   5
  duration:  29ms
  ```

3. Now write some code to make the tests pass. Inside fizzbuzz.js, type the following:

```
function fizzbuzz(num) {
  if (num % 3 !== 0 && num % 5 !== 0) {
    return num
  } else if (num % 3 === 0 && num % 5 !== 0) {
    return 'Fizz'
  } else if (num % 5 === 0 && num % 3 !== 0) {
    return 'Buzz'
  }
}

module.exports = fizzbuzz;
```

4. Now run the tests again using:
```
npm run test
```

Output:

```
 tape is working

    ✔ one equals one

  should return number if not divisible by 3 or 5

    ✔ fizzbuzz(1) should return 1
    ✔ fizzbuzz(2) should return 2
    ✔ fizzbuzz(4) should return 4
    ✔ fizzbuzz(7) should return 7

  should return 'Fizz' if divisible by 3 and not divisible by 5

    ✔ fizzbuzz(3) should return 'Fizz'
    ✔ fizzbuzz(6) should return 'Fizz
    ✔ fizzbuzz(9) should return 'Fizz
    ✔ fizzbuzz(33) should return 'Fizz

  should return 'Buzz' if divisible by 5 and not divisible by 3

    ✔ fizzbuzz(5) should return 'Buzz'
    ✔ fizzbuzz(10) should return 'Buzz'
    ✔ fizzbuzz(35) should return 'Buzz'
    ✔ fizzbuzz(50) should return 'Buzz'
    ✔ fizzbuzz(250) should return 'Buzz'


  total:     14
  passing:   14
  duration:  18ms
  ```

  Great! It works :)

  ## Case: Return 'FizzBuzz' when number is divisible by both 5 AND 3

Let's write some tests to check if our function returns 'FizzBuzz' when number is divisible by both 5 AND 3.

1. Let's create some new tests for this edge case:

```
test("should return 'FizzBuzz' if divisible by 5 and divisible by 3", function(t) {
  t.equals(fizzbuzz(15), 'FizzBuzz', "fizzbuzz(15) should return 'FizzBuzz'");
  t.equals(fizzbuzz(30), 'FizzBuzz', "fizzbuzz(30) should return 'FizzBuzz'");
  t.equals(fizzbuzz(45), 'FizzBuzz', "fizzbuzz(45) should return 'FizzBuzz'");
  t.equals(fizzbuzz(450), 'FizzBuzz', "fizzbuzz(450) should return 'FizzBuzz'");
  t.equals(fizzbuzz(600), 'FizzBuzz', "fizzbuzz(600) should return 'FizzBuzz'");
  t.end();
})
```

2. Run the tests to watch it fail
``` 
npm run test
```
Output: 

```
  tape is working

    ✔ one equals one

  should return number if not divisible by 3 or 5

    ✔ fizzbuzz(1) should return 1
    ✔ fizzbuzz(2) should return 2
    ✔ fizzbuzz(4) should return 4
    ✔ fizzbuzz(7) should return 7

  should return 'Fizz' if divisible by 3 and not divisible by 5

    ✔ fizzbuzz(3) should return 'Fizz'
    ✔ fizzbuzz(6) should return 'Fizz
    ✔ fizzbuzz(9) should return 'Fizz
    ✔ fizzbuzz(33) should return 'Fizz

  should return 'Buzz' if divisible by 5 and not divisible by 3

    ✔ fizzbuzz(5) should return 'Buzz'
    ✔ fizzbuzz(10) should return 'Buzz'
    ✔ fizzbuzz(35) should return 'Buzz'
    ✔ fizzbuzz(50) should return 'Buzz'
    ✔ fizzbuzz(250) should return 'Buzz'

  should return 'FizzBuzz' if divisible by 5 and divisible by 3


    ✖ fizzbuzz(15) should return 'FizzBuzz'
    ----------------------------------------
      operator: equal
      expected: 'FizzBuzz'
      actual:   undefined
      at: Test.<anonymous> (/Users/username/fizzbuzz/test/fizzbuzz.test.js:39:4)
      stack: |-


    ✖ fizzbuzz(30) should return 'FizzBuzz'
    ----------------------------------------
      operator: equal
      expected: 'FizzBuzz'
      actual:   undefined
      at: Test.<anonymous> (/Users/username/fizzbuzz/test/fizzbuzz.test.js:40:4)
      stack: |-


    ✖ fizzbuzz(45) should return 'FizzBuzz'
    ----------------------------------------
      operator: equal
      expected: 'FizzBuzz'
      actual:   undefined
      at: Test.<anonymous> (/Users/username/fizzbuzz/test/fizzbuzz.test.js:41:4)
      stack: |-


    ✖ fizzbuzz(450) should return 'FizzBuzz'
    -----------------------------------------
      operator: equal
      expected: 'FizzBuzz'
      actual:   undefined
      at: Test.<anonymous> (/Users/username/fizzbuzz/test/fizzbuzz.test.js:42:4)
      stack: |-


    ✖ fizzbuzz(600) should return 'FizzBuzz'
    -----------------------------------------
      operator: equal
      expected: 'FizzBuzz'
      actual:   undefined
      at: Test.<anonymous> (/Users/username/fizzbuzz/test/fizzbuzz.test.js:43:4)
      stack: |-




  Failed Tests: There were 5 failures

    should return 'FizzBuzz' if divisible by 5 and divisible by 3

      ✖ fizzbuzz(15) should return 'FizzBuzz'
      ✖ fizzbuzz(30) should return 'FizzBuzz'
      ✖ fizzbuzz(45) should return 'FizzBuzz'
      ✖ fizzbuzz(450) should return 'FizzBuzz'
      ✖ fizzbuzz(600) should return 'FizzBuzz'


  total:     19
  passing:   14
  failing:   5
  duration:  30ms
  ```

You should be getting the pattern now. 

For this last case we can just use an else statement as in our function the only edge case that is not handled is when the number is divisible by both 3 and 5.

3. Inside fizzbuzz.js, type the following:

```
function fizzbuzz(num) {
  if (num % 3 !== 0 && num % 5 !== 0) {
    return num
  } else if (num % 3 === 0 && num % 5 !== 0) {
    return 'Fizz'
  } else if (num % 5 === 0 && num % 3 !== 0) {
    return 'Buzz'
  } else {
    return 'FizzBuzz'
  }
}

module.exports = fizzbuzz;
```
4. Run the tests:
```
npm run test
```

```
tape is working

    ✔ one equals one

  should return number if not divisible by 3 or 5

    ✔ fizzbuzz(1) should return 1
    ✔ fizzbuzz(2) should return 2
    ✔ fizzbuzz(4) should return 4
    ✔ fizzbuzz(7) should return 7

  should return 'Fizz' if divisible by 3 and not divisible by 5

    ✔ fizzbuzz(3) should return 'Fizz'
    ✔ fizzbuzz(6) should return 'Fizz
    ✔ fizzbuzz(9) should return 'Fizz
    ✔ fizzbuzz(33) should return 'Fizz

  should return 'Buzz' if divisible by 5 and not divisible by 3

    ✔ fizzbuzz(5) should return 'Buzz'
    ✔ fizzbuzz(10) should return 'Buzz'
    ✔ fizzbuzz(35) should return 'Buzz'
    ✔ fizzbuzz(50) should return 'Buzz'
    ✔ fizzbuzz(250) should return 'Buzz'

  should return 'FizzBuzz' if divisible by 5 and divisible by 3

    ✔ fizzbuzz(15) should return 'FizzBuzz'
    ✔ fizzbuzz(30) should return 'FizzBuzz'
    ✔ fizzbuzz(45) should return 'FizzBuzz'
    ✔ fizzbuzz(450) should return 'FizzBuzz'
    ✔ fizzbuzz(600) should return 'FizzBuzz'


  total:     19
  passing:   19
  duration:  19ms
  ```

Excellent! Well done, you have just succesfully written the FizzBuzz function using Test-Driven Development!

## Conclusion

One of the greatest benefits about writing tests is that we can refactor our code and then run our tests again to make sure everything is working as we intended. If we didn't write any tests it would be very difficult to know if we broke something in the code when changes are made.

Let's demonstrate this by refactoring our code slightly and running the tests again.

Let's re-write our fizzbuzz function, but this time the first if statement will check if num is divisible by both 3 and 5 and return 'FizzBuzz' if true, and our else statement will just return the number if any of the other conditions are not met:

```
function fizzbuzz(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    return 'FizzBuzz'
  } else if (num % 3 === 0 && num % 5 !== 0) {
    return 'Fizz'
  } else if (num % 5 === 0 && num % 3 !== 0) {
    return 'Buzz'
  } else {
    return num
  }
}

module.exports = fizzbuzz;
```

Run the tests again, using npm run test.
```
npm run test
```
Output:
```
tape is working

    ✔ one equals one

  should return number if not divisible by 3 or 5

    ✔ fizzbuzz(1) should return 1
    ✔ fizzbuzz(2) should return 2
    ✔ fizzbuzz(4) should return 4
    ✔ fizzbuzz(7) should return 7

  should return 'Fizz' if divisible by 3 and not divisible by 5

    ✔ fizzbuzz(3) should return 'Fizz'
    ✔ fizzbuzz(6) should return 'Fizz
    ✔ fizzbuzz(9) should return 'Fizz
    ✔ fizzbuzz(33) should return 'Fizz

  should return 'Buzz' if divisible by 5 and not divisible by 3

    ✔ fizzbuzz(5) should return 'Buzz'
    ✔ fizzbuzz(10) should return 'Buzz'
    ✔ fizzbuzz(35) should return 'Buzz'
    ✔ fizzbuzz(50) should return 'Buzz'
    ✔ fizzbuzz(250) should return 'Buzz'

  should return 'FizzBuzz' if divisible by 5 and divisible by 3

    ✔ fizzbuzz(15) should return 'FizzBuzz'
    ✔ fizzbuzz(30) should return 'FizzBuzz'
    ✔ fizzbuzz(45) should return 'FizzBuzz'
    ✔ fizzbuzz(450) should return 'FizzBuzz'
    ✔ fizzbuzz(600) should return 'FizzBuzz'


  total:     19
  passing:   19
  duration:  22ms
  ```

  Awesome, our code still works :)
