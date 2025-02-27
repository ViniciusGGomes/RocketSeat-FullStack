// Arquivo de configuração do webpack

const path = require("path") //Lidar com caminhos de arquivos e pasta, caso essa aplicação for rodar em um ambiente diferente como linux ou mac
const HtmlWebpackPlugin = require('html-webpack-plugin'); //No ambiente node, nós usamos essa maneira de fazer importação

module.exports = {
    entry: path.resolve(__dirname, "src", "js", "index.js"),
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    },
    mode: "development",
    devServer: {
        static: {
            directory: path.join(__dirname, "dist", "index.html"),
        },
        port: 3333,
        open: true //Abre a pagina automaticamente
    },
    plugins: [new HtmlWebpackPlugin()],
    module: {                               //Cria regras
        rules: [{
            test: /\.css$/i,                //Verifica o arquivo
            use: ["style-loader", "css-loader"],
            exclude: "/node_modules",       //Não precisa olhar a pagina node_modules
        },
        {
            test: /\.js$/i,
            exclude: "/node_modules",
            use: {
                loader: "babel-loader",
                options: {
                    presets: [["@babel/preset-env", {targets: "defaults"}]],
                },
            },
        }
    ],
    },
}