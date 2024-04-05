const EXPRESS = require('express')
const APP = EXPRESS()
const PORT = 3000 // ambient variable


const PATH = require('path')

const BASEPATH = PATH.join(__dirname, 'templates')

APP.get('/', (req,res) => {
    res.send('Hello World!')
})


APP.listen(PORT, ( ) => {

    console.log(`App rodando na porta ${PORT}`)

})