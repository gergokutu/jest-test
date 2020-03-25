const functions = {
  add: (a, b) => a + b,
  isNull: () => null,
  checkValue: x => x,
  createUser: () => {
    const user = { firstName: 'Pocok' }
    user['lastName'] = 'Coder'
    return user
  },
  loadWeight: (load1, load2) => load1 + load2 
}

// export functions object
// exportSSS!!!!
module.exports = functions