const axios = require('axios')

const functions = {
  add: (a, b) => a + b,
  isNull: () => null,
  checkValue: x => x,
  createUser: () => {
    const user = { firstName: 'Pocok' }
    user['lastName'] = 'Coder'
    return user
  },
  loadWeight: (load1, load2) => load1 + load2,
  // async method
  fetchUser: () => axios.get('https://jsonplaceholder.typicode.com/users/1')
    .then(res => res.data)
    .catch(err => 'error'),
  // same with async/await
  fetchUserAsyncAwait: async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users/1')
      console.log(response.data.name)
      return response.data
    } catch(error) {
      console.log("error:", error)
    } 
  }  
}

// export functions object
// exportSSS!!!!
module.exports = functions