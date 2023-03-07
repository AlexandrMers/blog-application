import webpack from "webpack";
import { WebpackOptionsInterface } from "./types";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function getRules(
  options: WebpackOptionsInterface
): webpack.RuleSetRule[] {
  const typescriptConfigLoader: webpack.RuleSetRule = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  const cssLoaders = {
    test: /\.s[ac]ss$/i,
    use: [
      options.isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          modules: true,
          sourceMap: options.isDev,
        },
      },
      "sass-loader",
    ],
  };

  return [typescriptConfigLoader, cssLoaders];
}
