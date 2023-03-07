import path from "path";

import { WebpackOptionsInterface } from "./config/webpack/types";

import getWebpackConfig from "./config/webpack";

type EnvTypes = {
  PORT?: string;
  MODE?: WebpackOptionsInterface["mode"];
};

export default () => {
  const env = process.env as EnvTypes;

  const PORT: number = Number(env.PORT) || 3003;
  const mode = env.MODE ?? "development";
  const isDev = mode === "development";

  const options: WebpackOptionsInterface = {
    mode,
    paths: {
      entry: path.resolve(__dirname, "src", "index.tsx"),
      html: path.resolve(__dirname, "public", "index.html"),
      output: path.resolve(__dirname, "build"),
      env: path.resolve(
        __dirname,
        "config",
        "envs",
        `.${isDev ? "dev" : "prod"}.env`
      ),
    },
    port: PORT,
    isDev,
  };

  return getWebpackConfig(options);
};
