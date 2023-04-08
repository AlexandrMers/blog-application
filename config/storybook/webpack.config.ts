import path from 'path'
import type webpack from 'webpack'

import { getCssLoaders } from '../webpack/getCssLoaders'

export default ({ config }: { config: webpack.Configuration }) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  config.resolve?.modules = [
    path.resolve(__dirname, '..', '..', 'src'),
    'node_modules',
  ]
  config.resolve?.extensions?.push('.ts', '.tsx')

  const cssLoaders = getCssLoaders(true)
  config.module?.rules?.push(cssLoaders)

  return config
}
