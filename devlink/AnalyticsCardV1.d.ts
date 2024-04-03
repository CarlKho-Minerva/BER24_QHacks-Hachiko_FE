import * as React from "react";
import * as Types from "./types";

declare function AnalyticsCardV1(props: {
  as?: React.ElementType;
  title?: React.ReactNode;
  amount?: React.ReactNode;
  greenDataVisibility?: Types.Visibility.VisibilityConditions;
  redDataVisibility?: Types.Visibility.VisibilityConditions;
  greenDataAmount?: React.ReactNode;
  redDataAmount?: React.ReactNode;
  greenDataIconVisibility?: Types.Visibility.VisibilityConditions;
  redDataIconVisibility?: Types.Visibility.VisibilityConditions;
  amountProps?: Types.Devlink.RuntimeProps;
  greenDataAmountProps?: Types.Devlink.RuntimeProps;
  redDataAmountProps?: Types.Devlink.RuntimeProps;
  contentSlot?: Types.Devlink.Slot;
}): React.JSX.Element;
