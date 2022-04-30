const texto = '<b>Destaque</b><strong>Forte</strong><div>Conteudo</div>'
console.log(texto.match(/<(\w+)>.*<\/\1>/g))

const texto2 = 'Lentamente é mente muito lenta'
console.log(texto2.match(/(lenta)(mente).*\2.*\1/gi))

// FORMA DE NÃO ARMAZENAR O VALOR DO RETROVISOR ?:
console.log(texto2.match(/(?:lenta)(mente).*\1/gi))

console.log(texto2.match(/(lenta)(mente)/gi))
console.log(texto2.match(/(lenta)(mente)?/gi))
console.log(texto2.replace(/(lenta)(mente)/gi, 'ABC$2DEF'))

const texto3 = 'abcdefghijkll'
console.log(texto3.match(/(a)(b)(c)(d)(e)(f)(g)(h)(i)(j)(k)(l)\12/g))