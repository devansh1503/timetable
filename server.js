const express = require('express')
const { timeRoute } = require('./Router/timeroute')

const app = express()
app.use(express.json())
app.set('view engine', 'ejs')

app.use(timeRoute)

app.listen(3400, ()=>{
    console.log("http://localhost:3400/")
})