const texto = 'Pedrinho (filho do Pedro Silva) é doutor do ABC!'

// DENTRO DE UM CONJUNTO O GRUPO NÃO EXISTE
console.log(texto.match(/[(abc)]/gi))

console.log(texto.match(/([abc])/gi))

console.log(texto.match(/(abc)/gi))