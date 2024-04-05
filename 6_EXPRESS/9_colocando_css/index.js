const express = require('express')
const APP = express()
const PORT = 3000 // ambient variable


const PATH = require('path')

const users = require('./users')

// read the body
APP.use(
    express.urlencoded({
        extended:true,
    }),
)

APP.use(express.json())


// static files
APP.use(express.static('public'))



const BASEPATH = PATH.join(__dirname, 'templates')

APP.use('/users', users)

APP.get('/', (req,res) => {
    res.sendFile(`${BASEPATH}/index.html`)
})


APP.listen(PORT, ( ) => {

    console.log(`App rrunning on port ${PORT}`)

})