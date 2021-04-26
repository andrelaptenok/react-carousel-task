const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "index-bundle.js"
    },
    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                },
            },
            {
                test: /\.css$/,
                use: ["style-loader", {
                    loader: "css-loader",
                    options: {
                        modules: true,
                        importLoaders: 1,
                        modules: {
                            localIdentName: '[name]__[local]'
                        }
                    }
                }, "postcss-loader"]
            }
        ]
    },
    resolve: {
        extensions: ['.css', '.js', '.jsx']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
    ],
}