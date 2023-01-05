const express = require('express')
const { getthedata } = require('../Controllers/time.control')
const app = express()

const timeRoute = express.Router()

timeRoute.get('/', (req,res)=>{
    const data = getthedata()
    const sub = data.Subject
    const room = data.room
    const time = data.time
    res.render('index', {sub:sub, room:room, time:time})
})

module.exports = {
    timeRoute,
}