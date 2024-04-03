import * as React from "react";
import * as Types from "./types";

declare function TextCardButtonsBottom(props: {
  as?: React.ElementType;
  title?: React.ReactNode;
  paragraph?: React.ReactNode;
  buttonSecondaryVisibility?: Types.Visibility.VisibilityConditions;
  buttonPrimaryVisibility?: Types.Visibility.VisibilityConditions;
  buttonSecondaryText?: React.ReactNode;
  buttonPrimaryText?: React.ReactNode;
  buttonSecondaryLink?: Types.Basic.Link;
  buttonPrimaryLink?: Types.Basic.Link;
  buttonPrimaryIconRightVisibility?: Types.Visibility.VisibilityConditions;
  buttonPrimaryIconRightImage?: Types.Asset.Image;
  buttonPrimaryProps?: Types.Devlink.RuntimeProps;
  buttonSecondaryProps?: Types.Devlink.RuntimeProps;
}): React.JSX.Element;
