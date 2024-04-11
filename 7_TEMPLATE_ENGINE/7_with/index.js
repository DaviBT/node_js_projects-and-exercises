const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/dashboard', (req, res)=>{

    const items = ["item a", "item b", "item c"]

    res.render('dashboard', {items})
})

app.get('/post', (req, res)=>{
    const post = {
        title: 'Aprender Node.js',
        category: 'JavaScript',
        body:'Este artigo vai te ajudar a aprender NodeJs...',
        comments: 4,
    }
    res.render('blogpost', {post})
})

app.get('/', (req, res)=>{
    const user = {
        name:"Bessie",
        surname:"Coleman",
        age: 30,
    }

    const palavra = "teste"
    const auth = false
    const approved = true

    res.render('home',{user:user, palavra, auth, approved})
})

app.listen(3000, ()=> {
    console.log('App Funcionando!')
})
