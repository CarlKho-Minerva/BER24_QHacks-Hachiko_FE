import * as React from "react";
import * as Types from "./types";

declare function ModalCardV2(props: {
  as?: React.ElementType;
  image?: Types.Asset.Image;
  title?: React.ReactNode;
  text?: React.ReactNode;
  buttonSecondaryText?: React.ReactNode;
  buttonPrimaryText?: React.ReactNode;
  buttonPrimaryLink?: Types.Basic.Link;
  buttonPrimaryIconRightVisibility?: Types.Visibility.VisibilityConditions;
  buttonSecondaryProps?: Types.Devlink.RuntimeProps;
  buttonPrimaryProps?: Types.Devlink.RuntimeProps;
}): React.JSX.Element;
