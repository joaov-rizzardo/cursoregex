const texto = 'De longe eu avistei o fogo e uma pessoa gritando: FOGOOOOO!'
const texto1 = 'There is a big fog in NYC'

// + -> um ou mais
const regex = /fogo+/gi
console.log(texto.match(regex))
console.log(texto1.match(regex))

const texto2 = 'OS números 0123456789.'
console.log(texto2.match(/[0-9]/g))
console.log(texto2.match(/[0-9]+/g))
// USANDO O SHORTHAND
console.log(texto2.match(/\d+/g))