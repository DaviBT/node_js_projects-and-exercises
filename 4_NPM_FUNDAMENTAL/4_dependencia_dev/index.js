const _ = require('lodash')
const chalk = require('chalk')

const A = [1, 2, 3, 4, 5]
const B = [2, 4, 6, 8]

const DIFF = _.difference(A, B)

console.log(chalk.ref.bold(DIFF))