import webpack from "webpack";

export function getRules(): webpack.RuleSetRule[] {
  const typescriptConfigLoader: webpack.RuleSetRule = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  return [typescriptConfigLoader];
}
