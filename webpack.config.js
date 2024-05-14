const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/code.ts', // エントリーポイント
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'code.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/ui.html', // 元のHTMLファイルのパス
      filename: 'ui.html'       // 出力先のHTMLファイルの名前
    })
  ],
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  }
};