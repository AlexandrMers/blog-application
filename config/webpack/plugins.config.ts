import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";

import { WebpackOptionsInterface } from "./types";

export function getPlugins(
  options: WebpackOptionsInterface
): webpack.WebpackPluginInstance[] {
  const { paths } = options;

  return [
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new webpack.ProgressPlugin(),
  ];
}
