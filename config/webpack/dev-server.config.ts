import { Configuration as DevServerConfigurationType } from "webpack-dev-server";
import { WebpackOptionsInterface } from "./types";

export const getDevServerConfig = (
  options: WebpackOptionsInterface
): DevServerConfigurationType => {
  return {
    port: options.port,
    open: true,
    historyApiFallback: true,
  };
};
