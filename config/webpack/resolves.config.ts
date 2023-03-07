import webpack from "webpack";

export const getResolveConfig = (): webpack.ResolveOptions => {
  return {
    extensions: [".tsx", ".ts", ".js", ".scss"],
  };
};
