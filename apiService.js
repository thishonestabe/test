fetch('https://reqres.in/api/users')
.then(res => {
  if(res.ok) {
    console.log(res)
    return res.json()
  } else {
    console.log('request not successful')
  }
})
.then(data => console.log(data))
.catch(error => console.log(error))

fetch('https://reqres.in/api/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'User 1'
  })
})
  .then(res => {
    if(res.ok) {
      console.log(res)
      return res.json()
    } else {
      console.log('request not successful')
    }
  })
  .then(data => console.log(data))
  .catch(error => console.log(error))