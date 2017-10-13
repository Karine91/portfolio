const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');

const config = {
    output: {
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                enforce: "pre",
                use: [
                    {
                        loader: 'eslint-loader',
                        options: {
                            fix: true,
                        },
                    },
                    {   loader: 'babel-loader' },
                ],
                exclude: /node_modules/,
            },
        ]
    },
    plugins: [
        new UglifyJSPlugin({
            sourceMap: true
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
        })
    ]
};


module.exports = config;