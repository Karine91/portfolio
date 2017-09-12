const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;


exports.pug = function(){
    return {
        module: {
            rules: [
                {
                    test: /\.pug$/,
                    loader: 'pug-loader',
                    options: {
                        pretty: true,
                    },
                },
            ]
        }
    }
};

exports.extractCss = function(){
    return {
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: 'css-loader',
                    }),
                },
                {
                    test: /\.scss$/,
                    use: ExtractTextPlugin.extract({
                        publicPath: '../',
                        fallback: 'style-loader',
                        use: ['css-loader', 'postcss-loader','sass-loader'],    
                    }),
                },
            ]
        },
        plugins:[
            new ExtractTextPlugin('./css/[name].css'),
        ]
    }
};

exports.js = function(){
    return {
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
        }
    }
};

exports.imgLoad = function(){
    return {
        module: {
            rules: [
                {
                    test: /\.(jpg|png|svg)$/,
                    loader: 'file-loader',
                    options:{
                        name: 'images/[name].[ext]',
                    },
                },
            ]
        }
    }
};

exports.uglify = function(){
    return {
        plugins:[
            new UglifyJSPlugin()
        ]
    }
};
exports.lint = function(){
    return {
        plugins:[
            new StyleLintPlugin({
                configFile: './.stylelintrc',
            }),
        ]
    }
};

exports.imgCompressed = function(){
    return {
        plugins:[
            new ImageminPlugin(),
        ],
    };
};
