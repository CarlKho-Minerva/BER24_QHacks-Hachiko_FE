import * as React from "react";
import * as Types from "./types";

declare function BreadcrumbV2Item(props: {
  as?: React.ElementType;
  breadcrumbDividerImage?: Types.Asset.Image;
  breadcrumbDividerVisibility?: Types.Visibility.VisibilityConditions;
  breadcrumbLink?: Types.Basic.Link;
  breadcrumbIconVisibility?: Types.Visibility.VisibilityConditions;
  breadcrumbIconImage?: Types.Asset.Image;
  breadcrumbText?: React.ReactNode;
}): React.JSX.Element;
