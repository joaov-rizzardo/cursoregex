const texto = `Lista telefônica
                    - (11) 98745-1212
                    - 98741-4471
                    - (12)95413-5478
                    - (12)4789-5478`

const regex = /[\(\d{2}\)\s]*\d{4,5}-\d{4}/g

console.log(texto.match(regex))