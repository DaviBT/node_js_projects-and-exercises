const EXPRESS = require('express')
const APP = EXPRESS()
const PORT = 3000 // ambient variable


const PATH = require('path')

// read the body
APP.use(
    EXPRESS.urlencoded({
        extended:true,
    }),
)

APP.use(EXPRESS.json())

const BASEPATH = PATH.join(__dirname, 'templates')

APP.get('/users/add', (req,res) => {
    res.sendFile(`${BASEPATH}/userform.html`)
})

APP.post('/users/save', (req,res) => {
    console.log(req.body)

    const name = req.body.name
    const age = req.body.age
    
    console.log(`The user name is ${name} and he is ${age} years old`)

    res.sendFile(`${BASEPATH}/userform.html`)
})

APP.get('/users/:id', (req,res) => {
    const ID = req.params.id

    // reading the users table, searching a user from the database
    console.log(`Searching for the user: ${ID}`)

    res.sendFile(`${BASEPATH}/users.html`)
})

APP.get('/', (req,res) => {
    res.sendFile(`${BASEPATH}/index.html`)
})


APP.listen(PORT, ( ) => {

    console.log(`App rrunning on port ${PORT}`)

})

APP.get('/users/add', (req,res) => {
    res.sendFile(`${BASEPATH}/userform.html`)
})

APP.post('/users/save', (req,res) => {

})