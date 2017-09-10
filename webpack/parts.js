const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');


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
                    test: /\.scss$/,
                    use: ExtractTextPlugin.extract({
                        publicPath: '../',
                        fallback: 'style-loader',
                        use: ['css-loader', 'sass-loader'],    
                    }),
                },
                {
                    test: /\.css$/,
                    use: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: ['css-loader'],
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
}

exports.img = function(){
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
}

exports.uglify = function(){
    return {
        plugins:[
            new UglifyJSPlugin()
        ]
    }
}