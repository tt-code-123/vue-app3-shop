const path = require('path')
const px2rem = require('postcss-px2rem')
const postcss = px2rem({
  remUnit: 37.5
})
// vue.config.js
// 只能写vue封装的配置  
module.exports = {
  // 内部写webpack原生配置
  configureWebpack: {
    // 引入模块的解析
    resolve: {
      extensions: ['.js', '.vue', '.json'], // 可以省略的后缀名
      alias: { // 模块路径别名(简写方式)
        // 'vue$': 'vue/dist/vue.esm.js',  // 表示精准匹配  带vue编译器
        '@': path.resolve(__dirname,'src'),
        '@components': path.resolve(__dirname, 'src/components'),
        '@utils':path.resolve(__dirname,'src/utils')
      }
    }
  },
  devServer: {
    proxy: {
      // 处理以/api开头的路径的请求
      // '/api':'http://localhost:4000'  // http://localhost:4000/api/search/users
      '/api': {
        target: 'http://localhost:4000',  // 转发的目标地址
        pathRewrite: {'^/api':''},  // 转发请求时取去除路径前面的api
      },
      '/gh': {
        target: 'https://api.github.com', // 转发的目标地址
        pathRewrite: {
          '^/gh' : ''  // 转发请求时去除路径前面的/api
        },
        changeOrigin: true, // 支持跨域, 如果协议/主机也不相同, 必须加上
      },
      // historyApiFallback:true  // 任意的404响应都有可能需要被替待成index.html
    }
  },
  // runtimeCompiler: true,
  lintOnSave: false,  //关闭eslint的规则
  css: { // 添加postcss配置
    loaderOptions: {
      postcss: {
        plugins: [
          postcss
        ]
      }
    }
  },
}