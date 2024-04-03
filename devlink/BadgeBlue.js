import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./BadgeBlue.module.css";

export function BadgeBlue({
  as: _Component = _Builtin.Block,
  text = "Default",
}) {
  return (
    <_Component className={_utils.cx(_styles, "color-badge", "blue")} tag="div">
      {text}
    </_Component>
  );
}
