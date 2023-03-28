import { type Configuration as DevServerConfigurationType } from 'webpack-dev-server'
import { type WebpackOptionsInterface } from './types'

export const getDevServerConfig = (
  options: WebpackOptionsInterface
): DevServerConfigurationType => {
  return {
    port: options.port,
    open: true,
    historyApiFallback: true,
  }
}
