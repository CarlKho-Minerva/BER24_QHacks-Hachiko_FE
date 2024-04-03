import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./BadgeNeutral800.module.css";

export function BadgeNeutral800({
  as: _Component = _Builtin.Block,
  text = "Default",
}) {
  return (
    <_Component className={_utils.cx(_styles, "neutral-badge")} tag="div">
      {text}
    </_Component>
  );
}
