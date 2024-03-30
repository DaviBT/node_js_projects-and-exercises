// nome

console.log(process.argv)

const args = process.argv.slice(2)
console.log(args) // result: nome=David

const nome = args[0].split('=')[1]
console.log(nome) // result: David

// nome -> 0
// = -> 1
// David ->2


const idade = args[1].split('=')[1]
console.log(idade) // result: 17

// idade -> 0 and args -> 1
// = -> 1
// 17 -> 2


console.log(`O meu nome é ${nome} e minha idade é ${idade}`)