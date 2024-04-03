import * as React from "react";
import * as Types from "./types";

declare function ToggleButton(props: {
  as?: React.ElementType;
  labelText?: React.ReactNode;
  toggleButtonWrapperProps?: Types.Devlink.RuntimeProps;
}): React.JSX.Element;
