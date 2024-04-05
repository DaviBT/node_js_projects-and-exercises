const EXPRESS = require('express')
const APP = EXPRESS()
const PORT = 3000 // ambient variable


const PATH = require('path')

const BASEPATH = PATH.join(__dirname, 'templates')


APP.get('/', (req,res) => {
    const ID = req.params.id

    // reading the users table, searching a user from the database
    console.log(`Estamos buscando pelo usuário: ${ID}`)

    res.sendFile(`${BASEPATH}/index.html`)
})

APP.get('/', (req,res) => {
    res.sendFile(`${BASEPATH}/index.html`)
})


APP.listen(PORT, ( ) => {

    console.log(`App rrunning on port ${PORT}`)

})