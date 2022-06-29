let texto = 'a\n multi \n line \n\r string \n!'


let result = texto.replace(/[\r\n]/gm, '').toString()

console.log( result);