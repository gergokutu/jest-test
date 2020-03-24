const functions = require('./functions')
// use the spread syntax
const { add } = functions

// write tests
test(' Add 1 + 2 equals to 3', () => {
  expect(add(1, 2)).toBe(3)
})