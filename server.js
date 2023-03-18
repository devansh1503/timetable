const express = require('express')
const { timeRoute } = require('./Router/timeroute')
const cors = require('cors')
const cookieSession = require('cookie-session')

const app = express()

app.use(cors({}))
app.use(express.json())
app.set('view engine', 'ejs')

app.use(timeRoute)


app.listen(3400, () => {
    console.log("http://localhost:3400/")
})