import * as React from "react";
import * as Types from "./types";

declare function CardInsideImage(props: {
  as?: React.ElementType;
  image?: Types.Asset.Image;
  title?: React.ReactNode;
  paragraph?: React.ReactNode;
}): React.JSX.Element;
