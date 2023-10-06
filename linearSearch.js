function linearSearch(searchTerm, arr) {
  for (let i = 0; i < arr.length; i++) {
    let char = arr[i]

    if (char === searchTerm) { 
      return i // will stop at first occurence and return index of first occurence of searchTerm
    }
  }
  // will return undefined if searchTerm not in arr
}
console.log(linearSearch(0, [1,2,3,1]))

function globalLinearSearch(searchTerm, arr) {
  let charArr = [] // initialize empty arr to store indices

  for (let i = 0; i < arr.length; i++) {
    let char = arr[i]

    if (char === searchTerm) {
      charArr.push(i) // push index where searchTerm occurs into new array
    }
  }
  return charArr // will return undefined if searchTerm not in arr
}
console.log(globalLinearSearch(0, [1, 2, 3, 1]))

module.exports = { linearSearch, globalLinearSearch };
