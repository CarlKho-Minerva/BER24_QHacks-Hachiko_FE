import * as React from "react";
import * as Types from "./types";

declare function UserTableRow(props: {
  as?: React.ElementType;
  avatar?: Types.Asset.Image;
  name?: React.ReactNode;
  email?: React.ReactNode;
  jobTitle?: React.ReactNode;
  company?: React.ReactNode;
  greenBadgeVisibility?: Types.Visibility.VisibilityConditions;
  redBadgeVisibility?: Types.Visibility.VisibilityConditions;
  greenBadgeText?: React.ReactNode;
  redBadgeText?: React.ReactNode;
  role?: React.ReactNode;
}): React.JSX.Element;
