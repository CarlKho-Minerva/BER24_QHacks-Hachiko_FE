import * as React from "react";
import * as Types from "./types";

declare function TextInput(props: {
  as?: React.ElementType;
  labelText?: React.ReactNode;
  labelVisibility?: Types.Visibility.VisibilityConditions;
  inputProps?: Types.Devlink.RuntimeProps;
  inputVisibility?: Types.Visibility.VisibilityConditions;
  inputIconRightVisibility?: Types.Visibility.VisibilityConditions;
  inputIconLeftVisibility?: Types.Visibility.VisibilityConditions;
  inputIconRightProps?: Types.Devlink.RuntimeProps;
  inputIconLeftProps?: Types.Devlink.RuntimeProps;
  inputIconRightImage?: Types.Asset.Image;
  inputIconLeftImage?: Types.Asset.Image;
}): React.JSX.Element;
