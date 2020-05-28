const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
  css: {
    extract: false
    /*
    extract: {
      filename: `css/[name].css`,
      chunkFilename: `css/[name].css`
    }
    */
  },
  configureWebpack: {
    output: {
      filename: 'app.js'
    },
    optimization: {
      minimize: false,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            output: {
              comments: false
            }
          }
        })
      ]
    },
    module: {
      rules: [
        {
          test: /\.sass$/,
          use: [
            'vue-style-loader',
            'css-loader',
            {
              loader: 'sass-loader',
              options: {
                indentedSyntax: true,
                // sass-loader version >= 8
                sassOptions: {
                  indentedSyntax: true
                }
              }
            }
          ]
        }
      ]
    }
  },
  productionSourceMap: false,
  chainWebpack: (config) => {
    // config.output.chunkFilename(`js/[id].js`)
    config.optimization.delete('splitChunks')
    config.optimization.splitChunks(false)
  }
}
