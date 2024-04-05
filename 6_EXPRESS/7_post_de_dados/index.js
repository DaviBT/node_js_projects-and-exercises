const EXPRESS = require('express')
const APP = EXPRESS()
const PORT = 3000 // ambient variable


const PATH = require('path')

const BASEPATH = PATH.join(__dirname, 'templates')


APP.get('/users/:id', (req,res) => {
    const ID = req.params.id

    // reading the users table, searching a user from the database
    console.log(`Searching for the user: ${ID}`)

    res.sendFile(`${BASEPATH}/users.html`)
})

APP.get('/', (req,res) => {
    res.sendFile(`${BASEPATH}/users.html`)
})


APP.listen(PORT, ( ) => {

    console.log(`App rrunning on port ${PORT}`)

})