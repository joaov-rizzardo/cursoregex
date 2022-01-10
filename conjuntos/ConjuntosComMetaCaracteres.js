const texto = '.$+*?-'

console.log(texto.match(/[+/?*$]/g)) // não precisa de escape dentro do conjunto
console.log(texto.match(/[$-?]/g)) // isso é u intervalo (range0)

// NÃO é um intervalo (range)

console.log(texto.match(/[$\-?]/g))
console.log(texto.match(/[-?]/g))

// pode precisar de escape dentro do conjunto: - [] ^