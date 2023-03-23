import path from 'path'
import type webpack from 'webpack'

import { getCssLoaders } from '../webpack/getCssLoaders'

export default ({ config }: { config: webpack.Configuration }) => {
  config.resolve?.modules?.push(path.resolve(__dirname, '..', '..', 'src'))
  config.resolve?.extensions?.push('.ts', '.tsx')

  const cssLoaders = getCssLoaders(true)
  config.module?.rules?.push(cssLoaders)

  return config
}
