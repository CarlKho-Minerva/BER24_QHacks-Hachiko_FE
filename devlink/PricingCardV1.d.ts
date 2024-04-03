import * as React from "react";
import * as Types from "./types";

declare function PricingCardV1(props: {
  as?: React.ElementType;
  title?: React.ReactNode;
  price?: React.ReactNode;
  text?: React.ReactNode;
  feature1Visibility?: Types.Visibility.VisibilityConditions;
  feature2Visibility?: Types.Visibility.VisibilityConditions;
  feature3Visibility?: Types.Visibility.VisibilityConditions;
  feature4Visibility?: Types.Visibility.VisibilityConditions;
  feature5Visibility?: Types.Visibility.VisibilityConditions;
  feature1Text?: React.ReactNode;
  feature2Text?: React.ReactNode;
  feature3Text?: React.ReactNode;
  feature4Text?: React.ReactNode;
  feature5Text?: React.ReactNode;
  buttonText?: React.ReactNode;
  buttonLink?: Types.Basic.Link;
  buttonIconRightVisibility?: Types.Visibility.VisibilityConditions;
  buttonProps?: Types.Devlink.RuntimeProps;
}): React.JSX.Element;
