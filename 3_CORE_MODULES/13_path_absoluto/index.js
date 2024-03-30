const path = require('path')

// path absoluto
console.log(path.resolve('teste.txt'))

// formar path
const midFolder = "relatorios"
const fileName = "senai.txt"

const finalPath = path.join("/", 'arquivos', midFolder, fileName)
// output: \arquivos\relatorios\senai.txt

console.log(finalPath)