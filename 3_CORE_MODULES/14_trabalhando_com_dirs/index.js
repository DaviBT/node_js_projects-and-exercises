const fs = require('fs')

if(!fs.existsSync('/minhapasta')){
  console.log('Não existe!')
}

// create the directory
fs.mkdirSync('minhapasta') 

if (!fs.existsSync('/minhapasta')){
  console.log('existe!')
} 