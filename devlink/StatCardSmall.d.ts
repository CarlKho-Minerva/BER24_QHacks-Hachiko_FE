import * as React from "react";
import * as Types from "./types";

declare function StatCardSmall(props: {
  as?: React.ElementType;
  title?: React.ReactNode;
  amount?: React.ReactNode;
  amountProps?: Types.Devlink.RuntimeProps;
  badgeGreenVisibility?: Types.Visibility.VisibilityConditions;
  badgeGreenText?: React.ReactNode;
  badgeRedVisibility?: Types.Visibility.VisibilityConditions;
  badgeRedText?: React.ReactNode;
}): React.JSX.Element;
