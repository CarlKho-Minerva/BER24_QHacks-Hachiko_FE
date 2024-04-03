import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./BreadcrumbV2CurrentItem.module.css";

export function BreadcrumbV2CurrentItem({ as: _Component = _Builtin.Block }) {
  return (
    <_Component
      className={_utils.cx(_styles, "breadcrumb-badge", "current")}
      tag="div"
    >
      <_Builtin.Image
        className={_utils.cx(
          _styles,
          "max-w-14px",
          "max-w-12px-mbp",
          "cursor-not-allowed"
        )}
        loading="eager"
        width="auto"
        height="auto"
        alt=""
        src="https://uploads-ssl.webflow.com/660d670d57461f6bb915c687/660d670e57461f6bb915c834_breadcrumb-icon-3-dashflow-webflow-template.svg"
      />
      <_Builtin.Block
        className={_utils.cx(_styles, "cursor-not-allowed")}
        tag="div"
      >
        {"Breadcrumb current"}
      </_Builtin.Block>
    </_Component>
  );
}
