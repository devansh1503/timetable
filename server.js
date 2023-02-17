const express = require('express')
const { timeRoute } = require('./Router/timeroute')
const cors = require('cors')
const { AuthRoute } = require('./Router/authroute')
const passport = require('passport')
const { Strategy } = require('passport-google-oauth20')
const cookieSession = require('cookie-session')

const app = express()

app.use(cors({}))
app.use(express.json())
app.set('view engine', 'ejs')

// app.use(cookieSession({
//     name:'login-session',
//     maxAge: 5*60*1000,
//     keys:["Secret","Secret rotation"]
// }))
// app.use(passport.initialize())
// app.use(passport.session())

// app.use(AuthRoute)

// const checkLoggedIn = (req,res,next) =>{
//     const lgin = req.isAuthenticated();
//     if(!lgin){
//         return res.status(401).json({"session-expired":true})
//     }
//     next()
// }
// app.use(checkLoggedIn)

app.use(timeRoute)


app.listen(3400, () => {
    console.log("http://localhost:3400/")
})