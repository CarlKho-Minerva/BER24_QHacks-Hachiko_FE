import * as React from "react";
import * as Types from "./types";

declare function NotificationBarGreen(props: {
  as?: React.ElementType;
  iconLeftImage?: Types.Asset.Image;
  iconLeftVisibility?: Types.Visibility.VisibilityConditions;
  text?: React.ReactNode;
  closeIconProps?: Types.Devlink.RuntimeProps;
}): React.JSX.Element;
