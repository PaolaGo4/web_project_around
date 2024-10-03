const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  devtool: "inline-source-map",
  entry: {
    main: "./src/pages/index.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
    publicPath: "",
  },
  target: ["web", "es5"],
  stats: { children: true },
  mode: "development",
  devServer: {
    static: path.resolve(__dirname, "./dist"),
    compress: true,
    port: 8080,
    open: true,
  },
  module: {
    rules: [
      //* un array de reglas*//
      //* añadir un objeto que contenga reglas para Babel*//
      {
        //* expresión regular que busca todos los archivos js*//
        test: /\.js$/,
        //* todos los archivos deben ser procesados por babel-loader*//
        loader: "babel-loader",
        //* este excluye la carpeta node_modules, no se necesita procesar archivos en ella *//
        exclude: "/node_modules/",
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
            },
          },
          "postcss-loader",
        ],
      },
      {
        //* regla para el procesamiento de los archivos *//
        test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html", //* es la ruta a nuestro archivo index.html *//
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(), //* conecta o enlaza el plugin para que se fusionen los archivos CSS *//
  ],
};
