const express = require('express')
const app = express()
const axios = require('axios')
const url = 'https://gist.githubusercontent.com/bradtraversy/20dee7787486d10db3bd1f55fae5fdf4/raw/2c06c44dcea55ecbb6fbf20edfd240ec6373b688/state_capitals.json'
app.get('/', async (req,res) => {
   const result = await (await axios.get(url)).data
   console.log(result)
   res.send(result)
})

app.listen(3000,(e) => {
    console.log('servidor rodando na porta 3000')
})