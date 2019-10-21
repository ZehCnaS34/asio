const path = require("path");

const vendor = [
    'regenerator-runtime/runtime',
    'core-js/stable',
    'react',
    'redux',
];

const configuration = {
    mode: "development",
    devtool: "inline-source-maps",
    entry: {
        vendor,
        app: './src/index.ts'
    },
    devServer: {
        // contentBase: path.resolve(__dirname, "src/assets"),
    },
    resolve: {
        extensions: ".tsx .ts .jsx .js .html".split(/\s+/)
    },
    module: {
        rules: [
            {
                test: /\.[jt]sx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ["@babel/preset-env", "@babel/preset-react"],
                            plugins: ["babel-plugin-emotion"]
                        }
                    },
                    {
                        loader: "ts-loader"
                    }
                ]
            }
        ]
    }
};

module.exports = configuration;