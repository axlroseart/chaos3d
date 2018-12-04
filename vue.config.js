const path = require('path')
module.exports = {
  baseUrl: process.env.NODE_ENV === 'production' ? '' : '/',
  pages: {
    index: {
      // entry for the page
      entry: 'src/main.js',
      // the source template
      template: 'public/index.html',
      // output as dist/index.html
      filename: 'index.html'
    }
  },
  css: {
    loaderOptions: {
      css: {
      }
    }
  },
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.(js|vue)$/,
          enforce: 'pre',
          exclude: /node_modules/,
          use: {
            loader: 'eslint-loader',
            options: {
              formatter: require('eslint-friendly-formatter')
            }
          }
        },
        {
          test: /\.(mp4|webm|ogg|wav|flac|aac|swf|mov)(\?.*)?$/,
          loader: 'url-loader',
          options: {
            limit: 1000,
            name: 'media/[name]--[folder].[ext]?[hash:5]'
          }
        },
        {
          test: /\.styl$/,
          use: ['stylus-loader']
        }
      ]
    },
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.common.js',
        '@': path.join(__dirname, 'src/views/'),
        'assets': path.join(__dirname, 'src/assets'),
        'components': path.join(__dirname, 'src/components')
      },
      extensions: ['.js', '.vue', '.json', '.css', '.node', '.styl']
    }
  },
  devServer: {
    port: 9000
  }
}
