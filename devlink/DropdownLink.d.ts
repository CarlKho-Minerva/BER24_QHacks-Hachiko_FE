import * as React from "react";
import * as Types from "./types";

declare function DropdownLink(props: {
  as?: React.ElementType;
  checkboxVisibility?: Types.Visibility.VisibilityConditions;
  iconVisibility?: Types.Visibility.VisibilityConditions;
  iconImage?: Types.Asset.Image;
  linkText?: React.ReactNode;
  checkboxProps?: Types.Devlink.RuntimeProps;
}): React.JSX.Element;
