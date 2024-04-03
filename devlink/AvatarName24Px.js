import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./AvatarName24Px.module.css";

export function AvatarName24Px({
  as: _Component = _Builtin.Block,
  text = "J",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "avatar-name-circle", "_24px")}
      tag="div"
    >
      {text}
    </_Component>
  );
}
