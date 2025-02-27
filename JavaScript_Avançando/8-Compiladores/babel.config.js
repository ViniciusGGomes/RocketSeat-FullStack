// Configurações que babel tem que usar quando a gente iniciar ele


/* 
    Esse preset Vai permitir que o babel 
    transforme o código de ecmascript2015 em
    uma versão que é mais amplamente suportada
    pelos navegadores

*/
const presets = [
    ["@babel/preset-env",{
        targets: {
            edge: "17",
            firefox: "60",
            chrome: "67",
            safari: "11.1"
        }
    }]
]

// Exporta os nossos presets
module.exports = { presets }