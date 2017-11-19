const webpack = require('webpack');
const path = require('path');
 
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        Popper: ['popper.js', 'default'],
        // In case you imported plugins individually, you must also require them here:
        Util: "exports-loader?Util!bootstrap/js/dist/util",
        Dropdown: "exports-loader?Dropdown!bootstrap/js/dist/dropdown",
      })
    ],
    module: {
      rules: [
        {
          loader: 'babel-loader',
          test: /\.js$/,
          exclude: /node_modules/
        },
        {
          test: /\.s?css$/,
          use: [
            {
              loader: 'style-loader', // inject CSS to page
            }, 
            {
              loader: 'css-loader', // translates CSS into CommonJS modules
            }, 
            {
              loader: 'postcss-loader', // Run post css actions
              options: {
                plugins: function () { // post css plugins, can be exported to postcss.config.js
                  return [
                    require('precss'),
                    require('autoprefixer')
                  ];
                }
              }
            }, 
            {
              loader: 'sass-loader' // compiles SASS to CSS
            }
          ]
        },
        {
          test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
          use: [{
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',    // where the fonts will go
              publicPath: '../'       // override the default path
            }
          }]
        },
        {
          test: /\.(png|jpg|jpeg)$/,
          use: [
              {
                  loader: 'file-loader',
                  options: {
                    name: '[name].[ext]',
                    outputPath: 'img/',
                    publicPath: '../'
                  }
              }
          ]
        },
        {
          test: /\.html?$/,
          use: [
              {
                  loader: 'file-loader',
                  options: {
                      name: '[name].[ext]'
                  }
              }
          ]
        }
      ]
    },
    devtool: "cheap-module-eval-source-map",
    devServer: {
        contentBase: path.join(__dirname, 'public')
    }
};
