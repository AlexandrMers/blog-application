import type webpack from 'webpack'
import { type WebpackOptionsInterface } from './types'

export const getResolveConfig = ({
  paths
}: WebpackOptionsInterface): webpack.ResolveOptions => {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    modules: [paths.src, paths.nodeModules]
  }
}
