import * as React from "react";
import * as Types from "./types";

declare function TaskCardV1(props: {
  as?: React.ElementType;
  title?: React.ReactNode;
  paragraph?: React.ReactNode;
  badgeText?: React.ReactNode;
  checkboxProps?: Types.Devlink.RuntimeProps;
  firstButtonProps?: Types.Devlink.RuntimeProps;
  secondButtonProps?: Types.Devlink.RuntimeProps;
  thirdButtonProps?: Types.Devlink.RuntimeProps;
}): React.JSX.Element;
