const maxNumber = 10000 // the maximum potential number that can be generated

// generates array of random numbers divisible by 3 only
const numArrDivisibleBy3 = (num) => {
  let arr = []
  while (arr.length !== num) {
    let randNum = Math.floor((Math.random() * maxNumber) + 3)
    if (randNum % 3 === 0 && randNum % 5 !== 0) {
      arr.push(randNum)
    }
  }
  return arr
}

// generates array of random numbers divisible by 5 only
const numArrDivisibleBy5 = (num) => {
  let arr = []
  while (arr.length !== num) {
    let randNum = Math.floor((Math.random() * maxNumber) + 3)
    if (randNum % 5 === 0 && randNum % 3 !== 0) {
      arr.push(randNum)
    }
  }
  return arr
}

// generates array of random numbers divisible by 3 and 5 only
const numArrDivisibleBy3and5 = (num) => {
  let arr = []
  while (arr.length !== num) {
    let randNum = Math.floor((Math.random() * maxNumber) + 3)
    if (randNum % 3 === 0 && randNum % 5 === 0) {
      arr.push(randNum)
    }
  }
  return arr
}

// generates array of random numbers not divisible by 3 or 5 
const numArrNotDivisibleBy3or5 = (num) => {
  let arr = []
  while (arr.length !== num) {
    let randNum = Math.floor((Math.random() * maxNumber) + 3)
    if (randNum % 3 !== 0 && randNum % 5 !== 0) {
      arr.push(randNum)
    }
  }
  return arr
}

module.exports = {
  numArrDivisibleBy3,
  numArrDivisibleBy5,
  numArrDivisibleBy3and5,
  numArrNotDivisibleBy3or5
}
