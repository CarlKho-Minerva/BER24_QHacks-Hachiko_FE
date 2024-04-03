import * as React from "react";
import * as Types from "./types";

declare function TextAreaInput(props: {
  as?: React.ElementType;
  labelText?: React.ReactNode;
  labelVisibility?: Types.Visibility.VisibilityConditions;
  textAreaIconImage?: Types.Asset.Image;
  textAreaProps?: Types.Devlink.RuntimeProps;
  textAreaIconLeftProps?: Types.Devlink.RuntimeProps;
  textAreaVisibility?: Types.Visibility.VisibilityConditions;
  textAreaIconLeftVisibility?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
