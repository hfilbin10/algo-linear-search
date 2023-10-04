function linearSearch(searchTerm, arr) {
  for (let i = 0; i < arr.length; i++) {
    let char = arr[i]

    if (char === searchTerm) {
      return i
    }
  }
}
console.log(linearSearch(0, [1,2,3,1]))

function globalLinearSearch(searchTerm, arr) {
  let charArr = []

  for (let i = 0; i < arr.length; i++) {
    let char = arr[i]

    if (char === searchTerm) {
      charArr.push(i)
    }
  }
  return charArr
}
console.log(globalLinearSearch(0, [1, 2, 3, 1]))

module.exports = { linearSearch, globalLinearSearch };
