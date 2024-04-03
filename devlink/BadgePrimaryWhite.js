import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./BadgePrimaryWhite.module.css";

export function BadgePrimaryWhite({
  as: _Component = _Builtin.Block,
  text = "Default",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "primary-badge", "white")}
      tag="div"
    >
      {text}
    </_Component>
  );
}
