import * as React from "react";
import * as Types from "./types";

declare function NotificationBarOrange(props: {
  as?: React.ElementType;
  iconLeftVisibility?: Types.Visibility.VisibilityConditions;
  iconLeftImage?: Types.Asset.Image;
  text?: React.ReactNode;
  closeIconProps?: Types.Devlink.RuntimeProps;
}): React.JSX.Element;
