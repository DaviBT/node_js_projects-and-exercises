//  mais de um valor

const x = 10
const y = "João"
const z = [1, 2]

console.log(x,y,z)

// contagem de impressões

console.count(`{ O valor de x é: ${x}, contagem:}`)
console.count(`{ O valor de x é: ${x}, contagem:}`)
console.count(`{ O valor de x é: ${x}, contagem:}`)
console.count(`{ O valor de x é: ${x}, contagem:}`)

// variável entre string

//  console.log('%s', y)
console.log('O nome é %s, ele é programador', y)

// limpar o console
setTimeout(() => {
    console.log.clear()
}, 2000)