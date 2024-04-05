const EXPRESS = require('express')
const APP = EXPRESS()
const PORT = 3000 // ambient variable


const PATH = require('path')

const BASEPATH = PATH.join(__dirname, 'templates')

const CHECKAUTH = function(req, res, next) {
    req.authStatus = true
    if(req.authStatus) {
        console.log("You're logged, you can continue")
    } else {
        console.log("You're not logged, make login to continue")
    }
}

APP.get('/', (req,res) => {
    res.sendFile(`${BASEPATH}/index.html`)
})


APP.listen(PORT, ( ) => {

    console.log(`App rrunning on port ${PORT}`)

})