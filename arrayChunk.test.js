const arrayChunk = require('./arrayChunk')

test('arrayChunk function exists', () => {
  expect(arrayChunk).toBeDefined()
})

test('Chunk an array of 10 values with length of 3', () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const len = 3
  const chunkedArr = arrayChunk(numbers, len)
  
  expect(chunkedArr).toEqual([[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]])
})