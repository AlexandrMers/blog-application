import webpack from 'webpack'

import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import DotenvWebpackPlugin from 'dotenv-webpack'
import CopyWebpackPlugin from 'copy-webpack-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'

import { type WebpackOptionsInterface } from './types'

export function getPlugins(
  options: WebpackOptionsInterface
): webpack.WebpackPluginInstance[] {
  const { paths, isDev } = options

  return [
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new webpack.ProgressPlugin(),
    new DotenvWebpackPlugin({
      path: paths.env,
      systemvars: true,
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),

    new CopyWebpackPlugin({
      patterns: [
        {
          from: `${paths.public}/locales`,
          to: 'locales',
        },
        {
          from: `${paths.public}/favicons`,
          to: 'favicons',
        },
      ],
    }),
    new BundleAnalyzerPlugin({
      openAnalyzer: false,
    }),
  ]
}
