/**
 * Get a random number between n and m
 * @param { Number } m Integer >= 0
 * @param { Number } n Integer >= 0
 * @returns { Number } Random number
 */
const randomNum = (m, n) => {
  const max = Math.max(m, n)
  const min = Math.min(m, n)
  const res = Math.floor(Math.random() * (max - min + 1) + min)
  return res
}
/**
 * Randomly generate an int array with length of 4
 * @returns { Array<Integer> } A random int array with length of 4
 */
const generateArray = () => {
  const thousand = randomNum(1, 9)
  const hundred = randomNum(0, 9)
  const ten = randomNum(0, 9)
  const single = randomNum(0, 9)
  const fourDigitsArray = [thousand, hundred, ten, single]
  return fourDigitsArray
}
/**
 * Validate an array.
 * Two consecutive digits should not be the same.
 * Three consecutive digits should not be incremental
 * @param { Array<Integer> } array
 * @returns { Boolean }
 */
const validator = (array) => {
  for (let i = 1; i < array.length; i++) {
    if (array[i] == array[i - 1]) return false
    if (i == array.length) {
      if (array[i] - array[i - 1] == 1 && array[i + 1] - array[i] == 1)
        return false
    } else {
      if (array[i] - array[i - 1] == 1 && array[i - 1] - array[i - 2] == 1)
        return false
    }
  }
  return true
}
/**
 * Transfer a four digits array to a string
 * @param { Array<Integer> } array
 * @returns { String } The pin code string
 */
const getString = (array) => {
  if (array.length === 4) {
    const [thousand, hundred, ten, single] = array
    return thousand * 1000 + hundred * 100 + ten * 10 + single + ""
  } else {
    console.log("Array length has to be four.")
  }
}
/**
 * Create a batch of four digits pin code that satifies the requirement.
 * @param { Number } size Number of pin codes wanted.
 * @returns { Array<String> } Array of four digits integers
 */
const generatePinCodeBatch = (size = 1000) => {
  let batchArray = new Array()
  while (batchArray.length < size) {
    const number = generateArray()
    if (validator(number)) batchArray.push(getString(number))
  }
  return batchArray
}
console.log(...generatePinCodeBatch())

module.exports = { generatePinCodeBatch }
