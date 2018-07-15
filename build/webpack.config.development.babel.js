import path from 'path';

export default (env) => {
  return {
    mode: 'development',
    entry: ['./src/index'],
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'bundle.js',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          use: [
            'babel-loader',
          ],
          exclude: /node_modules/
        }
      ]
    }
  }
};
