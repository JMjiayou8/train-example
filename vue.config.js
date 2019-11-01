module.exports = {
  devServer: {
    port: 8080,//自定义本地服务端口,默认8080
    hot: true,//开启热启动
  },
  chainWebpack: config => {
    // 修复HMR
    config.resolve.symlinks(true);
  }
}