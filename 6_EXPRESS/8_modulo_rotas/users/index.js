const express = require('express')
const router = express.Router( )
const path = require('path')

const BASEPATH = path.join(__dirname, '../templates')

router.get('/add', (req,res) => {
    res.sendFile(`${BASEPATH}/userform.html`)
})

router.post('/save', (req,res) => {
    console.log(req.body)

    const name = req.body.name
    const age = req.body.age
    
    console.log(`The user name is ${name} and he is ${age} years old`)

    res.sendFile(`${BASEPATH}/userform.html`)
})

router.get('/:id', (req,res) => {
    const ID = req.params.id

    // reading the users table, searching a user from the database
    console.log(`Searching for the user: ${ID}`)

    res.sendFile(`${BASEPATH}/users.html`)
})

module.exports = router