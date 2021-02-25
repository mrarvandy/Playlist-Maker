const express = require('express')
const app = express()
const port = 8081
const routes = require('./routes')
// const session = require('express-session')

app.set ('view engine', 'ejs')
app.use(express.urlencoded({extended: false}))
app.use(routes)


// app.use(session({
//     secret: 'keyboard cat',
//     resave: false,
//     saveUninitialized: true,
//     cookie: {secure:false}
// }))



app.listen(port, () => {
    console.log(`This app listening at ${port}`)
})