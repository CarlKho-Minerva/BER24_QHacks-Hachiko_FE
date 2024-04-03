import * as React from "react";
import * as Types from "./types";

declare function ButtonSecondary(props: {
  as?: React.ElementType;
  link?: Types.Basic.Link;
  text?: React.ReactNode;
  iconLeftVisibility?: Types.Visibility.VisibilityConditions;
  iconLeftImage?: Types.Asset.Image;
  iconRightVisibility?: Types.Visibility.VisibilityConditions;
  iconRightImage?: Types.Asset.Image;
  buttonProps?: Types.Devlink.RuntimeProps;
}): React.JSX.Element;
