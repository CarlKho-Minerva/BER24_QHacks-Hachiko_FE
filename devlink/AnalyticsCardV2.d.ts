import * as React from "react";
import * as Types from "./types";

declare function AnalyticsCardV2(props: {
  as?: React.ElementType;
  amount?: React.ReactNode;
  amountProps?: Types.Devlink.RuntimeProps;
  title?: React.ReactNode;
  greenBadgeVisibility?: Types.Visibility.VisibilityConditions;
  redBadgeVisibility?: Types.Visibility.VisibilityConditions;
  contentSlot?: Types.Devlink.Slot;
  greenBadgeText?: React.ReactNode;
  redBadgeText?: React.ReactNode;
}): React.JSX.Element;
