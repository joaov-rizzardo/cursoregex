const texto = 'De longe eu avistei o fogo e uma pessoa gritando: FOGOOOOO!'
const texto1 = 'There is a big fog in NYC'

// * -> zero ou mais
const regex = /fogo*/gi


//const regex = /fogo*?/gi #NÃO GULOSO
console.log(texto.match(regex))
console.log(texto1.match(regex))