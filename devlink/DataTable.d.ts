import * as React from "react";
import * as Types from "./types";

declare function DataTable(props: {
  as?: React.ElementType;
  firstColumnTitle?: React.ReactNode;
  secondColumnTitle?: React.ReactNode;
  thirdColumnTitle?: React.ReactNode;
  fourthColumnTitle?: React.ReactNode;
  fifthColumnTitle?: React.ReactNode;
  rowsSlot?: Types.Devlink.Slot;
}): React.JSX.Element;
