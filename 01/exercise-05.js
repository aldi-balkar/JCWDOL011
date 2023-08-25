//No.1
const findNumber = function (numbers) {
  const lowest = Math.min(...numbers)
  const highest = Math.max(...numbers)
  let sum = 0
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i]
  }
  let average = sum / numbers.length

  console.log(lowest, highest, average)
}

const arr = [1, 2, 3, 5, 6, 8, 7, 9, 10, 10]
findNumber(arr)

//No.2
const word = ["Hai", "Aldi", "Balkar"]
const arrayToStrings = function (arr) {
  let addComma = arr.slice(0, 2).join(", ")
  let addAnd = arr.slice(1, 3).join(" and ")
  let mixCommaAnd = addAnd.slice(9)
  let holder = addComma + mixCommaAnd
  console.log(holder)
}
arrayToStrings(word)

//No.3
const stringsToArray = function (arr) {
  let array = [""]
  let j = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr.charAt(i) == " ") {
      array.push(" ")
      j++
    } else {
      array[j] += arr.charAt(i)
    }
  }
  return array
}
const strings = "saya suka main valorant"
console.log(stringsToArray(strings))

//No.4
const calcArray = function (arr1, arr2) {
  const newArr = arr1.map((arr1, index) => arr1 + arr2[index])
  return newArr
}
const array1 = [1, 2, 3]
const array2 = [3, 2, 1]
console.log(calcArray(array1, array2))

//No.5
const nomor = [1, 2, 3, 4, 5, 6, 7, 9]
const addElement = function (arr, number) {
  if (arr.includes(number)) {
    return nomor
  } else {
    return [...arr, number]
  }
}

console.log(addElement(nomor, 5))

//No.6
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
const findEvenNumbers = function (arr) {
  const newNumber = []
  arr.map((e) => {
    if (e % 2 === 0) {
      newNumber.push(e)
    }
  })
  return newNumber
}

console.log(findEvenNumbers(number))
