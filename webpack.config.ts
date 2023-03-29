import path from 'path'

import {
  type ModeWebpackType,
  type WebpackOptionsInterface,
} from './config/webpack/types'

import getWebpackConfig from './config/webpack'

interface EnvTypes {
  PORT?: string
  MODE?: ModeWebpackType
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default (opt: any) => {
  const env = process.env as EnvTypes
  const PORT: number = Number(env.PORT) ?? 3003
  const mode = env.MODE
  const isDev = mode === 'development'

  const PATHS_CONFIG = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    output: path.resolve(__dirname, 'build'),
    env: path.resolve(
      __dirname,
      'config',
      'envs',
      `.${isDev ? 'dev' : 'prod'}.env`
    ),
    src: path.resolve(__dirname, 'src'),
    nodeModules: path.resolve(__dirname, 'node_modules'),
    public: path.resolve(__dirname, 'public'),
  }

  const options: WebpackOptionsInterface = {
    paths: PATHS_CONFIG,
    port: PORT,
    isDev,
  }

  return getWebpackConfig(options)
}
