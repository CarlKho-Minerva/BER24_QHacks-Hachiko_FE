import * as React from "react";
import * as Types from "./types";

declare function DataTableRow(props: {
  as?: React.ElementType;
  name?: React.ReactNode;
  email?: React.ReactNode;
  phone?: React.ReactNode;
  company?: React.ReactNode;
  country?: React.ReactNode;
}): React.JSX.Element;
