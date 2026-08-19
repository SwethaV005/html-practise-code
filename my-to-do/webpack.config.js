const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
  entry: "./src/index.js",


  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },


  module: {
    rules: [
      {
       test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            sourceType: "module",
            presets: [
              ["@babel/preset-env", { modules: "commonjs" }],
              "@babel/preset-react",
            ],
          },
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp|avif)$/i,
        type: "asset/resource",
      },
    ],
  },


  resolve: {
    extensions: [".js", ".jsx"],
  },


  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
