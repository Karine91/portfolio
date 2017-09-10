const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const merge = require('webpack-merge');
const parts = require('./webpack/parts');
const devServer = require('./webpack/devserver');

const PATHS = {
    source: path.join(__dirname, 'source'),
    build: path.join(__dirname, 'build'),
};

const common = merge([
    {
        entry: {
            'index': PATHS.source + '/pages/index/index.js',
            'blog': PATHS.source + '/pages/blog/blog.js',
        },
        output: {
            path: PATHS.build,
            filename: './js/[name].js',
        },
        plugins: [
            new HtmlWebpackPlugin({
                filename: 'index.html',
                chunks: ['index', 'common'],
                template: PATHS.source + '/pages/index/index.pug',
            }),
            new HtmlWebpackPlugin({
                filename: 'blog.html',
                chunks: ['blog', 'common'],
                template: PATHS.source + '/pages/blog/blog.pug',
            }),
            new CleanWebpackPlugin('build'),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'common',
            }),
            new OptimizeCssAssetsPlugin({
                cssProcessorOptions: {discardComments: {removeAll: true}},
            }),
            new StyleLintPlugin({
                configFile: './.stylelintrc',
            }),
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
            })
        ],
    },
    parts.pug(),
    parts.extractCss(),
    parts.js(),
    parts.img(),
]);

module.exports = function(env){
    if (env === 'production'){
        return merge([
            common,
            parts.uglify()
        ]);
    }
    if (env === 'development'){
        return merge([
            common,
            devServer()
        ]);
    }
};
