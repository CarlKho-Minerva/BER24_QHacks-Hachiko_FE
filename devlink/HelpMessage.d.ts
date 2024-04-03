import * as React from "react";
import * as Types from "./types";

declare function HelpMessage(props: {
  as?: React.ElementType;
  iconImage?: Types.Asset.Image;
  iconVisibility?: Types.Visibility.VisibilityConditions;
  messageText?: React.ReactNode;
}): React.JSX.Element;
