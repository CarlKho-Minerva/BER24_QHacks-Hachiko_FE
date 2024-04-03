import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./BadgeNeutral300.module.css";

export function BadgeNeutral300({
  as: _Component = _Builtin.Block,
  text = "Default",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "neutral-badge", "neutral-300")}
      tag="div"
    >
      {text}
    </_Component>
  );
}
