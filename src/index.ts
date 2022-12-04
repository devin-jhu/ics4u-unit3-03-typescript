/**
 * Binary Search program
 *
 * By:      Devin Jhu
 * Version: 1.0
 * Since:   2022-11-07
 */

import promptSync from 'prompt-sync'
const prompt = promptSync()

/**
 *
 * Function of BinarySearch
 *
 * @param {number[]} userArray Newly Generated and Sorted Array
 * @param {number} userInt Number the program is looking for
 * @param {number} min lowest possible index it can be
 * @param {number} max Highest possible index it can be
 * @returns {number} binarySearch
 */
function binarySearch(
  userArray: number[],
  userInt: number,
  min: number,
  max: number
): number {
  // Base Condition
  if (min > max) {
    return -1
  }

  // Find the middle index
  const middle = Math.floor((min + max) / 2)

  // Compare mid with given key x

  if (userArray[middle] === userInt) {
    return middle
  }

  // If element at mid is greater than x,
  // search in the left half of mid
  if (userArray[middle] > userInt) {
    return binarySearch(userArray, userInt, min, middle - 1)
  } else {
    // If element at mid is smaller than x,
    // search in the right half of mid
    return binarySearch(userArray, userInt, middle + 1, max)
  }
}

const MIN = 1
const MAX = 999
const ARRAY_SIZE = 250

const randomNumberArray = new Array(ARRAY_SIZE)

for (let counter = 0; counter < randomNumberArray.length; counter++) {
  randomNumberArray[counter] = Math.floor(Math.random() * MAX + MIN)
}

randomNumberArray.sort(function (a, b) {
  return a - b
})

// Input
console.log('Binary Search Program')

console.log('the sorted list of numbers: ')

for (let counter = 0; counter < randomNumberArray.length; counter++) {
  process.stdout.write(`${String(randomNumberArray[counter])}, `)
}

console.log('\n')

const numberInput = Number(prompt('search a number between 0 and 999: '))

// Process and Output
console.log(
  `Your number is in index: ${binarySearch(
    randomNumberArray,
    numberInput,
    0,
    ARRAY_SIZE - 1
  )}`
)

console.log('\nDone.')
