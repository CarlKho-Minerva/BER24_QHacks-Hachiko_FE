import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./BreadcrumbV1CurrentItem.module.css";

export function BreadcrumbV1CurrentItem({
  as: _Component = _Builtin.Block,
  text = "Breadcrumb Current",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "text-100", "breadcrumb-current")}
      tag="div"
    >
      {text}
    </_Component>
  );
}
