import webpack from "webpack";
import path from "path";
import { WebpackOptionsInterface } from "./types";

export const getResolveConfig = ({
  paths,
}: WebpackOptionsInterface): webpack.ResolveOptions => {
  return {
    extensions: [".tsx", ".ts", ".js"],
    modules: [paths.src, paths.nodeModules],
  };
};
