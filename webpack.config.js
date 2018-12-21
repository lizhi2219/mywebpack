const path=require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports={  
    entry: './src/index.js',  
    output: {  
        path: path.resolve(__dirname,'dist'),  
        filename:'bundle.js'
    },
    module: {
        rules:[
            {
                test:'/\.css/',
                loader:['css-loader','style-loader']
            },
            {
                test:'/\.less/',
                loader:['less-loader','style-loader']
            }
        ]
    },
    devServer: {
        contentBase:path.resolve(__dirname,'dist'), 
        host:'localhost',
        compress:true, 
        port:8082,
        proxy:{
            //代理跨域
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html', 
            filename:'index.html'  
        })
    ]
 }  