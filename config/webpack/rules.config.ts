import webpack from "webpack";
import { WebpackOptionsInterface } from "./types";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function getRules({
  isDev,
}: WebpackOptionsInterface): webpack.RuleSetRule[] {
  const typescriptConfigLoader: webpack.RuleSetRule = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  const cssLoaders = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: (resPath: string) => resPath.includes(".module."),
            localIdentName: isDev
              ? "[name]__[local]--[hash:base64:5]"
              : "[hash:base64:8]",
          },
        },
      },
      "resolve-url-loader",
      "sass-loader",
    ],
  };

  const filesLoader = {
    test: /\.(png|svg|jpg|jpeg|gif)$/i,
    type: "asset/resource",
  };

  const fontsLoader = {
    test: /\.(woff|woff2|eot|ttf|otf)$/i,
    type: "asset/resource",
  };

  return [typescriptConfigLoader, cssLoaders, filesLoader, fontsLoader];
}
