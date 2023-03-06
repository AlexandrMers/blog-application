import webpack from "webpack";

// Configs
import { getPlugins } from "./plugins.config";
import { getRules } from "./rules.config";
import { getResolveConfig } from "./resolves.config";
import { getDevServerConfig } from "./dev-server.config";

import { WebpackOptionsInterface } from "./types";

const getWebpackConfig = (
  options: WebpackOptionsInterface
): webpack.Configuration => {
  const { mode, paths, isDev } = options;

  return {
    mode,
    entry: paths.entry,
    module: {
      rules: getRules(),
    },
    resolve: getResolveConfig(),
    plugins: getPlugins(options),
    devtool: isDev ? "inline-source-map" : false,
    devServer: getDevServerConfig(options),

    output: {
      filename: "[name].[contenthash].js",
      path: paths.output,
      clean: true,
      publicPath: "/",
    },
  };
};

export default getWebpackConfig;
