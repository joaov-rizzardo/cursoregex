// no início...
// Um byte (8 bits) - 256 caracteres
// Símbolos, Pontuação, A-Z, a-z, 0-9

// Dois bytes (16 bits) - 65500+ caracteres
// +Símbolos, +Pontuação, A-Z, a-z, 0-9

// Unicode
// Quantidade de Bytes Variáveç - Exoansível
// Suporta mais de 1 milão caracteres
// Atualmente tem mais de 100 mil caractres atribuídos

//http://unicode-table.com/pt/

const texto = 'aʥ'
console.log(texto.match(/a\u02A5/)) // \u para encontrar caracteres da tabela unicode
