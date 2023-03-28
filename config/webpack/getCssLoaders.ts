import type webpack from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export function getCssLoaders(isDev: boolean): webpack.RuleSetRule {
  return {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          sourceMap: isDev,
          modules: {
            auto: (resPath: string) => resPath.includes('.module.'),
            localIdentName: isDev
              ? '[name]__[local]--[hash:base64:5]'
              : '[hash:base64:8]',
          },
        },
      },
      {
        loader: 'resolve-url-loader',
        options: {
          sourceMap: isDev,
        },
      },
      {
        loader: 'sass-loader',
        options: {
          sourceMap: isDev,
        },
      },
    ],
  }
}
