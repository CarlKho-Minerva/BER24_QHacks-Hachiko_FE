import * as React from "react";
import * as Types from "./types";

declare function Checkbox(props: {
  as?: React.ElementType;
  checkboxProps?: Types.Devlink.RuntimeProps;
  checkboxLabelText?: React.ReactNode;
  checkboxLabelVisibility?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
