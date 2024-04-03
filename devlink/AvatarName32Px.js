import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./AvatarName32Px.module.css";

export function AvatarName32Px({
  as: _Component = _Builtin.Block,
  text = "JC",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "avatar-name-circle", "_32px")}
      tag="div"
    >
      {text}
    </_Component>
  );
}
