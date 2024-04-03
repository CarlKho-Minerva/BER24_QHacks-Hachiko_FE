import * as React from "react";
import * as Types from "./types";

declare function CardIconTop(props: {
  as?: React.ElementType;
  image?: Types.Asset.Image;
  title?: React.ReactNode;
  paragraph?: React.ReactNode;
  link?: Types.Basic.Link;
  linkText?: React.ReactNode;
}): React.JSX.Element;
