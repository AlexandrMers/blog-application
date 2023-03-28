import type webpack from 'webpack'
import { type WebpackOptionsInterface } from './types'

import { getCssLoaders } from './getCssLoaders'

export function getRules({
  isDev,
}: WebpackOptionsInterface): webpack.RuleSetRule[] {
  const typescriptConfigLoader: webpack.RuleSetRule = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }

  const cssLoaders = getCssLoaders(isDev)

  const svgrLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  }

  const filesLoader = {
    test: /\.(png|json|jpg|jpeg|gif|woff|woff2|eot|ttf|otf)$/i,
    type: 'asset/resource',
  }

  return [typescriptConfigLoader, cssLoaders, svgrLoader, filesLoader]
}
