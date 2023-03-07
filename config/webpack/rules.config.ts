import webpack from "webpack";
import { WebpackOptionsInterface } from "./types";

export function getRules(
  options: WebpackOptionsInterface
): webpack.RuleSetRule[] {
  const typescriptConfigLoader: webpack.RuleSetRule = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  const cssLoaders: webpack.RuleSetRule = {
    test: /\.s[ac]ss$/i,
    use: [
      "style-loader",
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
