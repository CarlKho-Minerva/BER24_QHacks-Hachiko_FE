import * as React from "react";
import * as Types from "./types";

declare function EmptyStateV2(props: {
  as?: React.ElementType;
  icon?: Types.Asset.Image;
  title?: React.ReactNode;
  text?: React.ReactNode;
  buttonText?: React.ReactNode;
  buttonLink?: Types.Basic.Link;
  buttonSecondaryProps?: Types.Devlink.RuntimeProps;
}): React.JSX.Element;
