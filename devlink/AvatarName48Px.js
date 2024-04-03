import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./AvatarName48Px.module.css";

export function AvatarName48Px({
  as: _Component = _Builtin.Block,
  text = "JC",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "avatar-name-circle", "_48px")}
      tag="div"
    >
      {text}
    </_Component>
  );
}
