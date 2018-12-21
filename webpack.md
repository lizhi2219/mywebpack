1、创建文件夹
2、初始化 npm init -y
3、下载webpack： npm install webpack webpack-cli -D
4、创建俩文件
    mkdir src  disr
5、创建js文件 webpack.config.js
6、把下面代码引用
const path=require('path')
module.exports={  
    entry: './src/index.js',  
    output: {  
        path: path.resolve(__dirname,'dist'),  
        filename:'bundle.js'
    },
    module: {},
    plugins: [],
    devServer: {}
 }  
7、运行 npx webpack 命令
    配置开发服务器在webpack.config.js中
    运行npm i webpack-dev-server –D   
    devServer: {
            contentBase:path.resolve(__dirname,'dist'),
            port:8081,
            host:'localhost',
            compress:true
        }
    contentBase 配置开发服务于运行时的文件根目录
    host开发服务器监听的主机地址    
    compress
    port
8、在package.json配置命令
"scripts":{
    "build": "webpack --mode production"
}
或者
"scripts":{
    "build": "webpack --open --mode production"
}
启动npm run dev

