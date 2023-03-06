import path from "path";

import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";

export function getRules(): webpack.RuleSetRule[] {
  return [
    {
      test: /\.tsx?$/,
      use: "ts-loader",
      exclude: /node_modules/,
    },
  ];
}

function getPlugins(): webpack.WebpackPluginInstance[] {
  return [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../../", "public", "index.html"),
    }),
    new webpack.ProgressPlugin(),
  ];
}

const getWebpackConfig = (): webpack.Configuration => ({
  mode: "development",
  entry: path.resolve(__dirname, "../../", "src", "index.ts"),
  module: {
    rules: getRules(),
  },
  resolve: {
    extensions: [".tsx", ".ts"],
  },
  plugins: getPlugins(),

  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "../../", "build"),
    clean: true,
  },
});

export default getWebpackConfig;
