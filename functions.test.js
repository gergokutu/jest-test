const functions = require('./functions')
// use the spread syntax
const { add, isNull, checkValue } = functions

// write tests
test(' Add 1 + 2 equals to 3', () => {
  expect(add(1, 2)).toBe(3)
})

test('2nd test does nothing...', () => {})

test('Add 1 + 2 NOT eguals to 4', () => {
  expect(add(1, 2)).not.toBe(4)
})

// CHECK FOR TRUTHY & FALSY VALUES
// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite
// toBeTruthy
// toBeFalsy

test('Should be null', () => {
  expect(isNull()).toBeNull()
})

test('Should be falsy', () => {
  expect(checkValue(undefined)).toBeFalsy()
})