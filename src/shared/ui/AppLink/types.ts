import { NavLinkProps } from "react-router-dom";

export type Types = NavLinkProps & {
  className?: string;
  appearance?: Appearance;
};

export enum Appearance {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}
