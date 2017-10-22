const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');
var path = require('path');

const config = {
    entry: {
        entry: './src/scripts/app.js',
        admin: './src/admin/main.js',
        styles: './src/admin/stylesheets/index.js'
    },
    output: {
        path: path.resolve(__dirname, './build'),
        publicPath: '/build/',
        filename: '[name].bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                loader: 'css-loader'
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                    {
                        loader: 'sass-resources-loader',
                        options: {
                            resources: [
                                './src/admin/stylesheets/variables.scss',
                                './src/admin/stylesheets/mixins.scss',
                            ]
                        }
                    }
                ],
            },
            {
                test: /\.(eot|ttf|woff|woff2)$/,
                loader: 'file-loader?name=fonts/[name].[ext]'
            },
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
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
                        // the "scss" and "sass" values for the lang attribute to the right configs here.
                        // other preprocessors should work out of the box, no loader config like this necessary.
                        'scss': [
                            'vue-style-loader',
                            'css-loader',
                            'postcss-loader',
                            'svg-fill-loader/encodeSharp',
                            'sass-loader',
                            {
                                loader: 'sass-resources-loader',
                                options: {
                                    resources: [
                                        './src/admin/stylesheets/variables.scss',
                                        './src/admin/stylesheets/mixins.scss',
                                    ]
                                }
                            }
                        ],
                        'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
                    },
                    esModule: false,
                    // other vue-loader options go here
                }
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            },
            {
                test: /\.svg$/,
                use: [
                    { loader: 'url-loader' },
                    { loader: 'svg-fill-loader?fill=white' },
                ],
            },

        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            'img': path.resolve(__dirname, 'src/images'),

        },
        extensions: ['.js', '.vue']
    },
    plugins: [
        new UglifyJSPlugin({
            sourceMap: true
        })
    ]
};


module.exports = config;