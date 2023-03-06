import webpack from "webpack";

// Configs
import { getPlugins } from "./plugins.config";
import { getRules } from "./rules.config";
import { getResolveConfig } from "./resolves.config";

import { WebpackOptionsInterface } from "./types";

const getWebpackConfig = (
  options: WebpackOptionsInterface
): webpack.Configuration => {
  const { mode, paths } = options;

  return {
    mode,
    entry: paths.entry,
    module: {
      rules: getRules(),
    },
    resolve: getResolveConfig(),
    plugins: getPlugins(options),

    output: {
      filename: "[name].[contenthash].js",
      path: paths.output,
      clean: true,
    },
  };
};

export default getWebpackConfig;
