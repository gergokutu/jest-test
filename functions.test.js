const functions = require('./functions')
// use the spread syntax
const { add } = functions

// write tests
test(' Add 1 + 2 equals to 3', () => {
  expect(add(1, 2)).toBe(3)
})

test('2nd test does nothing...', () => {})

test('Add 1 + 2 NOT eguals to 4', () => {
  expect(add(1, 2)).not.toBe(4)
})