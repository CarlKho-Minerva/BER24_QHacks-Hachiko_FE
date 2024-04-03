import * as React from "react";
import * as Types from "./types";

declare function ButtonPrimary(props: {
  as?: React.ElementType;
  text?: React.ReactNode;
  link?: Types.Basic.Link;
  iconRightVisibility?: Types.Visibility.VisibilityConditions;
  iconLeftVisibility?: Types.Visibility.VisibilityConditions;
  iconLeftImage?: Types.Asset.Image;
  iconRightImage?: Types.Asset.Image;
  buttonProps?: Types.Devlink.RuntimeProps;
}): React.JSX.Element;
