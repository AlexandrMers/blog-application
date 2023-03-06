import path from "path";

import webpack from "webpack";

import { WebpackOptionsInterface } from "./config/webpack/types";
import getWebpackConfig from "./config/webpack";

const options: WebpackOptionsInterface = {
  mode: "development",
  paths: {
    entry: path.resolve(__dirname, "src", "index.ts"),
    html: path.resolve(__dirname, "public", "index.html"),
    output: path.resolve(__dirname, "build"),
  },
};

const config: webpack.Configuration = getWebpackConfig(options);
export default config;
