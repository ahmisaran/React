config = {
   entry: './main.js',

   output: {
      path:'/Users/adprasad/Code/training/omo/React/React/',
      filename: 'index.js',
   },

   devServer: {
      inline: true,
      port: 7080,
      historyApiFallback: true
   },

   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',

            query: {
               presets: ['es2015', 'react']
            }
         }
      ]
   }
}

module.exports = config;
