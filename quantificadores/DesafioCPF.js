const texto = `CPF dos Aprovados:
                    - 600.567.890-12
                    - 471.441.478-69
                    - 478.954.412-87
                    - 235.478.965-11`

const regex = /\d{3}\.\d{3}\.\d{3}-\d{2}/g

console.log(texto.match(regex))