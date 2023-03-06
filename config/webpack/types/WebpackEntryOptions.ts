export type ModeWebpackType = "production" | "development";

export type PathsForWebpackConfig = {
  html: string;
  entry: string;
  output: string;
  env: string;
};

export interface WebpackOptionsInterface {
  mode: ModeWebpackType;
  paths: PathsForWebpackConfig;
  port: number;
  isDev: boolean;
}
