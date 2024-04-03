import * as React from "react";
import * as Types from "./types";

declare function TaskCardV2(props: {
  as?: React.ElementType;
  title?: React.ReactNode;
  text?: React.ReactNode;
  badgeText?: React.ReactNode;
  avatarImage?: Types.Asset.Image;
  date?: React.ReactNode;
  dateProps?: Types.Devlink.RuntimeProps;
  firstButtonProps?: Types.Devlink.RuntimeProps;
  secondButtonProps?: Types.Devlink.RuntimeProps;
}): React.JSX.Element;
