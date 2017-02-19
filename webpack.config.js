require('webpack')
require('weex-loader')

var path = require('path')

module.exports = {
  //页面入口文件配置
  entry: {
    //':'左侧的属性名称要与we文件名对应,决定了输出js文件的名称哦
    publishTask: path.join(__dirname, 'src/publishTask', 'publishTask.we?entry=true'),
    taskDetail: path.join(__dirname, 'src/taskDetail', 'taskDetail.we?entry=true'),
    selfInfo:path.join(__dirname, 'src/selfInfo', 'selfInfo.we?entry=true')
  },
  //入口文件输出配置
  output: {
    path: 'dist',
    filename: '[name].js'
  },
  module: {
    //加载器配置
    loaders: [
      {
        test: /\.we(\?[^?]+)?$/,
        loaders: ['weex-loader']
      }
    ]
  }
}
