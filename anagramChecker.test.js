const isAnagram = require('./anagramChecker')

test('Check if isAnagram function exists', () => {
  expect(typeof isAnagram).toBe('boolean')
})

test('"Dormitory" is an anagram of "dirty room##" (should return true)', () => {
  const str1 = 'Dormitory'
  const str2 = 'dirty room##'
  const checkResult = isAnagram(str1, str2)

  expect(checkResult).toBe(true)
  expect(isAnagram('Dormitory', 'dirty room##')).toBeTruthy()
})