const express = require('express')
const { getmessdata } = require('../Controllers/mess.control')
const { getthedata } = require('../Controllers/time.control')
const app = express()

const timeRoute = express.Router()

timeRoute.get('/', (req,res)=>{
    const data = getthedata()
    // res.render('index', {sub:sub, room:room, time:time})
    res.json(data)
})

timeRoute.get('/mess', (req, res)=>{
    const data = getmessdata()
    res.json(data)
})

module.exports = {
    timeRoute,
}