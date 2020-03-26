const functions = require('./functions')
// use the spread syntax
const {
  add,
  isNull,
  checkValue,
  createUser,
  loadWeight,
  fetchUser,
  fetchUserAsyncAwait
} = functions

// run initDatabase before and closeDatabase after each tests
// beforeEach(() => initDatabase())
// afterEach(() => closeDatabase())

// run initDatabase before and closeDatabase after all tests
beforeAll(() => initDatabase())
afterAll(() => closeDatabase())

const initDatabase = () => console.log('Database Initialized...')
const closeDatabase = () => console.log('Database Closed...')

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

// test createUser > not OK with toBe
// test('User should be Pocok Coder object', () => {
//   expect(createUser()).toBe({
//     firstName: 'Pocok',
//     lastName: 'Coder'
//   })
// })

// test createUser > OK with toStrictEqual
// test('User should be Pocok Coder object', () => {
//   expect(createUser()).toStrictEqual({
//     firstName: 'Pocok',
//     lastName: 'Coder'
//   })
// })

// toEqual
test('User should be Pocok Coder object', () => {
  expect(createUser()).toEqual({
    firstName: 'Pocok',
    lastName: 'Coder'
  })
})

// toBe is for primitive types
// toEqual is for composite types (object, array...)

// less than and greater than
test('Weight should be under 1600 and above 1400', () => {
  expect(loadWeight(800, 700)).toBeLessThan(1600)
  expect(loadWeight(800, 700)).toBeGreaterThan(1400)
})

// Regex
test('There is no I in time', () => {
  expect('time').not.toMatch(/I/)
  // case insensitive version
  // expect('time').not.toMatch(/I/i)
})

// Array
// usually better to keep the test and the tested separately
// but now is ok for learning occasion
test('Mogyi should be in usernames', () => {
  const usernames = ['Pocok', 'Pista', 'Mogyi']
  expect(usernames).toContain('Mogyi')
})

// working with async data, axios > jsonplaceholder, user/1
// Promise
test('User fetched name should be Leanne Graham', () => {
  // do not forget the assertion
  expect.assertions(1)
  return fetchUser()
    .then(data => {
      expect(data.name).toEqual('Leanne Graham')
    })
})

// refactor to async/await
test('Async/await => User fetched name should be Leanne Graham', async () => {
  // do not forget the assertion
  expect.assertions(1)
  const data = await fetchUserAsyncAwait()
  expect(data.name).toEqual('Leanne Graham')
})