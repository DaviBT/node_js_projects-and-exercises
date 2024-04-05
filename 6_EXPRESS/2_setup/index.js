const EXPRESS = require('express')

const APP = EXPRESS()

const PORT = 3000 // ambient variable


APP.get('/', (req,res) => {
    res.send('Hello World!')
})


APP.listen(PORT, ( ) => {

    console.log(`App rodando na porta ${PORT}`)

})