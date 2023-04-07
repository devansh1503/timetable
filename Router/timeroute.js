const express = require('express')
const { getmessdata } = require('../Controllers/mess.control')
const { getthedata } = require('../Controllers/time.control')
const app = express()

const timeRoute = express.Router()

timeRoute.get('/time', (req, res) => {
    const currdate = new Date()
    const day = currdate.getDay()
    const data = getthedata(day-1)
    // res.render('index', {sub:sub, room:room, time:time})
    res.json(data)
})
timeRoute.get('/time/:day', (req,res)=>{
    const data = getthedata(req.params.day-1)
    res.json(data)
})

timeRoute.get('/mess', (req, res) => {
    const currdate = new Date()
    const day = currdate.getDay()
    const data = getmessdata(day-1)
    res.json(data)
})
timeRoute.get('/mess/:day', (req, res) => {
    const data = getmessdata(req.params.day-1)
    res.json(data)
})
module.exports = {
    timeRoute,
}