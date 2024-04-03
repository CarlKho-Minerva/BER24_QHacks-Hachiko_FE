import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Avatar32Px.module.css";

export function Avatar32Px({
  as: _Component = _Builtin.Image,
  image = "https://uploads-ssl.webflow.com/660d670d57461f6bb915c687/660d670e57461f6bb915c81a_avatar-image-dashflow-webflow-template.jpg",
  avatarProps = {},
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "avatar-circle", "_32px")}
      loading="eager"
      width="auto"
      height="auto"
      alt=""
      src={image}
      {...avatarProps}
    />
  );
}
