var path = require('path');

const config = {
    entry: './src/scripts/app.js',
    output: {
        path: path.resolve(__dirname, './build'),
        publicPath: '/build/',
        filename: 'bundle.js',
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
                    { loader: 'babel-loader' },
                ],
                exclude: /node_modules/,
            },
        ]
    }
};


module.exports = config;