import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./BadgePrimary.module.css";

export function BadgePrimary({
  as: _Component = _Builtin.Block,
  text = "Default",
}) {
  return (
    <_Component className={_utils.cx(_styles, "primary-badge")} tag="div">
      {text}
    </_Component>
  );
}
