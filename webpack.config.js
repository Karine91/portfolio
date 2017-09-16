const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const config={
    output: {
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                enforce: "pre",
                loader: "eslint-loader",
                options: {
                    fix: true,
                },
            },
        ]
    },
    plugins: [
        new UglifyJSPlugin({
            sourceMap: true
        }), 
    ]
};

module.exports = config;