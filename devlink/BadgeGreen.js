import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./BadgeGreen.module.css";

export function BadgeGreen({
  as: _Component = _Builtin.Block,
  text = "Default",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "color-badge", "green")}
      tag="div"
    >
      {text}
    </_Component>
  );
}
