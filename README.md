![](./fizzbuzz.png)

## Task

Use TDD to write a function that will take a number as an argument and returns 'Fizz' if the number is divisible by 3, 'Buzz' if the number is divisible by 5 and 'FizzBuzz' if the number is divisible by both 3 and 5. If the number is neither divisible by 3 or 5, then return the number.

### For example:

```javascript
fizzbuzz(1) => 1
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

**1. Create a new folder called fizzbuzz and change directory into it**

```
mkdir fizzbuzz && cd fizzbuzz
```

**2. Add a file called fizzbuzz.js**

```
touch fizzbuzz.js
```

**3. Create a tests folder and change directory into tests**

```
mkdir tests && cd tests
```

**4. Inside tests folder, create a file called fizzbuzz.test.js**

```
touch fizzbuzz.test.js
```
**5. change into fizzbuzz directory**

```
cd ..
```
**6. Create package.json using npm (skip through questions by pressing enter)**

```
npm init
```
**7. Install Tape and tap-spec using npm, and save as a development dependency**

```
npm install --save-dev tape tap-spec
```

**8. In our package.json, under scripts add "tape ./test/*.test.js | tap-spec" like the following:**

```javascript
"scripts": {
  "test": "tape ./tests/*.test.js | tap-spec"
},
```

Now when we run the command 'npm run test' in our terminal, npm will run our test script using tape. We let tape know where our test scripts are by specifying a path './tests/*.test.js', so any files that end with .test.js inside our tests folder will be run by tape.

The vertical bar | is commonly referred to as a "pipe". It is used to pipe one command into another. That is, it directs the output from the first command into the input for the second command. We get the output from tape and we feed it as input into tap-spec so the output looks more presentable in the terminal. (Try running your tests without piping to tap-spec to see the difference)

**9. Type the following code to fizzbuzz.js**

```javascript
function fizzbuzz(num) {

}

module.exports = fizzbuzz;
```

Here we define a function called fizzbuzz which accepts one argument which will be assigned to a variable called num. 
We then assign this function to module.exports so we are able to use our fizzbuzz function in another file in our code.

For more info about module.exports [See here](https://www.sitepoint.com/understanding-module-exports-exports-node-js/)

**10. Inside fizzbuzz.test.js type the following code (do not copy paste!):**

```javascript
const test = require('tape');
const fizzbuzz = require('../fizzbuzz.js');

test('tape is working', function(t) {
  const actual = 1;
  const expected = 1;
  t.equals(actual, expected, 'one should equal one');
  t.end();
})
```

Let's break down what this code is doing:

```javascript
const test = require('tape');
```

In the first line we are loading the tape module using the keyword 'require', and then assigning it to a const variable called test. We do this so we can access the methods in the tape library to run our tests. 

```javascript
const fizzbuzz = require('../fizzbuzz.js');
```

In the second line we use require to load our fizzbuzz function and assign it to a const variable called fizzbuzz as we will need to invoke our function when writing our tests.

**Note**
When loading a module that we have installed using npm install, we just pass the module's name as a string into require. When we want to load our own file (without npm install) we will need to specify the file path. We want to go out from the current directory so we use two dots followed by a forward slash and the name of the file.

In the next part, we write a simple test to check that everything is working. 

```javascript
test('tape is working', function(t) {

})
```

We begin by invoking tape (which is referenced by our const variable test) and pass it two arguments. The first argument is a string that describes what we are trying to test which will be useful when reading back our test results.

The second argument is a callback function. A callback function is simply a reference to a function that will get called later in the program. Tape will invoke our callback function and pass in an object as an argument which will be referenced by the variable t. We can then access the methods on this test object using a dot notation.

The next two lines we define two const variables called actual and expected. Actual is the result we get from our program, normally we would invoke a function and store its returned value into the actual variable but in this case we assign the number 1 as we deliberately want the test to pass.

```javascript
test('tape is working', function(t) {
  const actual = 1;
  const expected = 1;
})
```

We then write the test, we will be using the equals method on the t object which we will use to check if our actual value is equal to our expected value.

The equals method takes 3 arguments, first argument will be our actual value, the second will be the expected value and the third argument is a string which will give a description of what we are expecting from this test.

```javascript
 t.equals(actual, expected, 'one should equal one');
 ```

Finally, we will invoke t.end() to let tape know that we are done testing. Always remember to include t.end() otherwise you will get errors when running your tests.

```javascript
t.end()
```


**11. Check that the tests are working, by running them using npm:**

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

**1. Let's write a failing test. Type the following into fizzbuzz.test.js:**

```javascript
test('should return num if not divisible by 3 or 5', function(t) {
  const expected = 1;
  const actual = fizzbuzz(1)
  t.equals(actual, expected, 'fizzbuzz(1) should return 1');
  t.end();
})
```

**2. type npm run test and watch it fail**

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

**3. Inside fizzbuzz.js, write the minimum amount of code so that the test passes as follows:**

```javascript
function fizzbuzz(num) {
  if (num === 1) return 1
}

module.exports = fizzbuzz;
```

**4. run 'npm run test' again**
```javascript
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
**5. Let's add a few more tests, in fizzbuzz.test.js:**

Instead of writing the tests separately like this:

```javascript
test('should return number if not divisible by 3 or 5', function(t) {
  const expected = 1
  const actual = fizzbuzz(1)
  t.equals(fizzbuzz(1), 1, 'fizzbuzz(1) should return 1');
  t.end();
})

test('should return number if not divisible by 3 or 5', function(t) {
  const expected = 2
  const actual = fizzbuzz(2)
  t.equals(fizzbuzz(2), 2, 'fizzbuzz(2) should return 2');
  t.end();
})

```

We can group similar tests together like this: 

```javascript 
test('should return number if not divisible by 3 or 5', function(t) {
  t.equals(fizzbuzz(1), 1, 'fizzbuzz(1) should return 1');
  t.equals(fizzbuzz(2), 2, 'fizzbuzz(2) should return 2');
  t.equals(fizzbuzz(4), 4, 'fizzbuzz(4) should return 4');
  t.equals(fizzbuzz(7), 7, 'fizzbuzz(7) should return 7');
  t.end();
})
```

**6. Let's make these tests pass, in fizzbuzz.js type the following code:**

```javascript
function fizzbuzz(num) {
  if (num === 1) return 1;
  else if (num === 2) return 2;
  else if (num === 4) return 4;
  else if (num === 7) return 7;
}

module.exports = fizzbuzz;
```

**7. npm run test, watch the tests pass.**

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


**8. The if statements are not really ideal, especially if we need our function to cover a larger range of numbers (e.g between 1 and 10,000). Wouldn't it better to refactor our code so it takes into account any number that isn't divisible by 3 or 5?**

The remainder operator returns the remainder left over when one operand is divided by a second operand
[See here for more info](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators)

We can use the remainder operator to check if a number is divisible by another number.

Examples:
```javascript
10 % 2    // 0
11 % 2    // 1
```

If the remainder is zero then we know that the second operand is a divisor of the first operand. e.g 10 % 2 equals zero, which means 10 is divided by 2 with no remainder left over. We can also check if the second operand is not a divisor of the first operand e.g 11 % 2 equals 1, which is not equal to zero.

We can use this in our code to check if a number is not divisible by 3 AND is not divisible by 5. In fizzbuzz.js, refactor as follows:

```javascript
function fizzbuzz(num) {
  if (num % 3 !== 0 && num % 5 !== 0) {
    return num
  }
}

module.exports = fizzbuzz;
```

**9. npm run test**
```javascript
npm run test
```
We should see the tests passing.

## Case: Return 'Fizz' when number is divisible by 3 and not divisible by 5

Let's write some tests to check if our function returns 'Fizz' when number is divisible by 3 and NOT divisible by 5.

**1. Let's define a new test and then add group all our tests as follows:**

```javascript
test("should return 'Fizz' if divisible by 3 and not divisible by 5", function(t) {
  t.equals(fizzbuzz(3), 'Fizz', "fizzbuzz(3) should return 'Fizz'");
  t.equals(fizzbuzz(6), 'Fizz', "fizzbuzz(6) should return 'Fizz");
  t.equals(fizzbuzz(9), 'Fizz', "fizzbuzz(9) should return 'Fizz");
  t.equals(fizzbuzz(33), 'Fizz', "fizzbuzz(33) should return 'Fizz");
  t.end();
})
```

**2. Watch the tests fail by doing:**
```javascript
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
In all the error messages, tape is telling us that it expected 'Fizz' but the actual value that was returned from our fizzbuzz function was undefined. This is because we haven't written the code to deal with this yet, so by default our function returns undefined.

**3. Now write some code to make the tests pass. Inside fizzbuzz.js, type the following:**

```javascript
function fizzbuzz(num) {
  if (num % 3 !== 0 && num % 5 !== 0) {
    return num
  } else if (num % 3 === 0 && num % 5 !== 0) {
    return 'Fizz'
  }
}

module.exports = fizzbuzz;
```

**4. Now run the tests again using:**
```javascript
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

**1. Let's define a new test and then group all our tests as follows:**

```javascript
test("should return 'Buzz' if divisible by 5 and not divisible by 3", function(t) {
  t.equals(fizzbuzz(5), 'Buzz', "fizzbuzz(5) should return 'Buzz'");
  t.equals(fizzbuzz(10), 'Buzz', "fizzbuzz(10) should return 'Buzz'");
  t.equals(fizzbuzz(35), 'Buzz', "fizzbuzz(35) should return 'Buzz'");
  t.equals(fizzbuzz(50), 'Buzz', "fizzbuzz(50) should return 'Buzz'");
  t.equals(fizzbuzz(250), 'Buzz', "fizzbuzz(250) should return 'Buzz'");
  t.end();
})
```

**2. Watch the tests fail by doing:**
```javascript
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

**3. Now write some code to make the tests pass. Inside fizzbuzz.js, type the following:**

```javascript
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

**4. Now run the tests again using:**
```javascript
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

**1. Let's define a new test and then group all our tests as follows:**

```javascript
test("should return 'FizzBuzz' if divisible by 5 and divisible by 3", function(t) {
  t.equals(fizzbuzz(15), 'FizzBuzz', "fizzbuzz(15) should return 'FizzBuzz'");
  t.equals(fizzbuzz(30), 'FizzBuzz', "fizzbuzz(30) should return 'FizzBuzz'");
  t.equals(fizzbuzz(45), 'FizzBuzz', "fizzbuzz(45) should return 'FizzBuzz'");
  t.equals(fizzbuzz(450), 'FizzBuzz', "fizzbuzz(450) should return 'FizzBuzz'");
  t.equals(fizzbuzz(600), 'FizzBuzz', "fizzbuzz(600) should return 'FizzBuzz'");
  t.end();
})
```

**2. Run the tests to watch it fail**
``` javascript
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

For this last case we can just use an else statement as in our function the only case that is not handled is when the number is divisible by both 3 and 5.

**3. Inside fizzbuzz.js, type the following:**

```javascript
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
**4. Run the tests:**
```javascript
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

**1. Let's re-write our fizzbuzz function, but this time make the first if statement check if num is divisible by both 3 and 5 and return 'FizzBuzz' if true. We will also change the two else if statements as the first if statement checks for both conditions (divisible by both 3 and 5), so we only need to check if the number is either divisible by 3 (for Fizz) or divisible by 5 (for Buzz). Finally, we will include an else statement to return the number if none of the other conditions are met.**

```javascript
function fizzbuzz(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    return 'FizzBuzz'
  } else if (num % 3 === 0) {
    return 'Fizz'
  } else if (num % 5 === 0) {
    return 'Buzz'
  } else {
    return num
  }
}

module.exports = fizzbuzz;
```

**2. Run the tests again, using npm run test.**
```javascript
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

  Awesome, our code still works as intended :)
