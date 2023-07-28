import path from "path";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default {
    entry: './webpack.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js',
    },
    experiments: {
        outputModule: true,
    },
    plugins: [
        //empty pluggins array
    ],
    module: {
        // https://webpack.js.org/loaders/babel-loader/#root
        rules: [
            {
                test: /.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', "es2015", "es2016"],
                    }
                }
            }
        ],
    },
    devtool: 'source-map'
}