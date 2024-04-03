import * as React from "react";
import * as Types from "./types";

declare function ModalCardV1(props: {
  as?: React.ElementType;
  title?: React.ReactNode;
  text?: React.ReactNode;
  buttonSecondaryText?: React.ReactNode;
  buttonPrimaryText?: React.ReactNode;
  buttonPrimaryLink?: Types.Basic.Link;
  buttonPrimaryIconRightVisibility?: Types.Visibility.VisibilityConditions;
  buttonPrimaryProps?: Types.Devlink.RuntimeProps;
  buttonSecondaryProps?: Types.Devlink.RuntimeProps;
}): React.JSX.Element;
