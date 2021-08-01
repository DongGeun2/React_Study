const path = require('path');

module.exports = {
    name : 'wordreply-setting',
    mode : 'development',   // 실 개발에선 production
    devtool : 'eval',
    resolve : {
        extensions : ['.jsx','.js']
    },

    // 입력
    entry : {
        app : ['./client']
    },

    module: {
        rules : [{
            test : /\.jsx?/, 
            loader : 'babel-loader',
            options : {
                presets : ['@babel/preset-env', '@babel/preset-react'],
            },
        }]
    },

    // 출력
    output : {
      path : path.join(__dirname, 'dist'),
      filename : 'app.js',
    },


}