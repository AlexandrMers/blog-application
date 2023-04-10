import type webpack from 'webpack'

// Configs
import { getPlugins } from './plugins.config'
import { getLoaders } from './loaders.config'
import { getResolveConfig } from './resolves.config'
import { getDevServerConfig } from './dev-server.config'

import { type WebpackOptionsInterface } from './types'

const getWebpackConfig = (
  options: WebpackOptionsInterface
): webpack.Configuration => {
  const { paths, isDev } = options

  return {
    entry: paths.entry,
    module: {
      rules: getLoaders(options),
    },
    resolve: getResolveConfig(options),
    plugins: getPlugins(options),
    devtool: isDev ? 'source-map' : undefined,
    devServer: isDev ? getDevServerConfig(options) : undefined,

    output: {
      filename: '[name].[contenthash].js',
      path: paths.output,
      assetModuleFilename: 'assets/[name][ext]',
      clean: true,
      publicPath: '/',
    },
  }
}

export default getWebpackConfig
