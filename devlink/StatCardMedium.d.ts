import * as React from "react";
import * as Types from "./types";

declare function StatCardMedium(props: {
  as?: React.ElementType;
  image?: Types.Asset.Image;
  title?: React.ReactNode;
  amount?: React.ReactNode;
  amountProps?: Types.Devlink.RuntimeProps;
  greenDataVisibility?: Types.Visibility.VisibilityConditions;
  greenDataAmount?: React.ReactNode;
  greenDataAmountProps?: Types.Devlink.RuntimeProps;
  greenDataIconVisibility?: Types.Visibility.VisibilityConditions;
  redDataVisibility?: Types.Visibility.VisibilityConditions;
  redDataAmount?: React.ReactNode;
  redDataAmountProps?: Types.Devlink.RuntimeProps;
  redDataIconVisibility?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
