import * as React from "react";
import * as Types from "./types";

declare function BreadcrumbV1Item(props: {
  as?: React.ElementType;
  iconVisibility?: Types.Visibility.VisibilityConditions;
  iconImage?: Types.Asset.Image;
  breadcrumbLink?: Types.Basic.Link;
  breadcrumbText?: React.ReactNode;
  breadcrumbUnderlineVisibility?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
