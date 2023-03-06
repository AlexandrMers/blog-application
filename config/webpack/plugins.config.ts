import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";

import { WebpackOptionsInterface } from "./types";
import DotenvWebpackPlugin from "dotenv-webpack";

export function getPlugins(
  options: WebpackOptionsInterface
): webpack.WebpackPluginInstance[] {
  const { paths } = options;

  return [
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new webpack.ProgressPlugin(),
    new DotenvWebpackPlugin({
      path: paths.env,
      systemvars: true,
    }),
  ];
}
