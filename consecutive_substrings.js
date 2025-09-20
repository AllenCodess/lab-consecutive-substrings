function consecutiveSubstrings(string) {
  const result = []

  // outer loop: starting index
  for (let i = 0; i < string.length; i++) {
    // inner loop: ending index
    for (let j = i + 1; j <= string.length; j++) {
      result.push(string.slice(i, j)) // take substring from i to j
    }
  }

  return result
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: ['a', 'ab', 'abc', 'b', 'bc', 'c']")
  console.log("=>", consecutiveSubstrings('abc'))

  console.log("")

  console.log("Expecting: ['a']")
  console.log("=>", consecutiveSubstrings('a'))

  console.log("")

  console.log("Expecting: []")
  console.log("=>", consecutiveSubstrings('')) // edge case: empty string
}

module.exports = consecutiveSubstrings