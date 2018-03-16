var path = require('path');

module.exports = {
    entry : path.resolve(__dirname,'src')+'/app/app.js',
    output : {
        path : path.resolve(__dirname,'dist')+'/app',
        filename : 'bundle.js',
        publicPath : '/app/'
    },
    module : {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['react','es2015']
                    }
                }
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            }
        ]
    }
};