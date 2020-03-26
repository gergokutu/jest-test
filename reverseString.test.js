const reverseString = require('./reverseString')

// just test if the function exists
test('reverseString function exists', () => {
  expect(reverseString).toBeDefined()
})

test('String reverses', () => {
  expect(reverseString('hello')).toEqual('olleh')
})

test('String reverses with uppercase', () => {
  expect(reverseString('Hello')).toEqual('olleh')
})