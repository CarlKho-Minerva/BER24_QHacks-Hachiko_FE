import * as React from "react";
import * as Types from "./types";

declare function AnalyticsCardV3(props: {
  as?: React.ElementType;
  title?: React.ReactNode;
  contentSlot?: Types.Devlink.Slot;
  amount?: React.ReactNode;
  amountProps?: Types.Devlink.RuntimeProps;
  subtitle?: React.ReactNode;
}): React.JSX.Element;
