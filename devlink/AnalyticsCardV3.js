import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./AnalyticsCardV3.module.css";

export function AnalyticsCardV3({
  as: _Component = _Builtin.Block,
  title = "Card title",
  contentSlot,
  amount = "$84,226",
  amountProps = {},
  subtitle = "Card subtitle",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "card", "amount-over-graph")}
      tag="div"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "text-center", "mg-bottom-16px")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "text-100", "medium")}
          tag="div"
        >
          {title}
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block tag="div">
        {contentSlot ?? (
          <_Builtin.Image
            className={_utils.cx(_styles, "width-100")}
            loading="eager"
            width="auto"
            height="auto"
            alt=""
            src="https://uploads-ssl.webflow.com/660d670d57461f6bb915c687/660d670e57461f6bb915c823_analytics-card-graph-3-dashflow-webflow-template.svg"
          />
        )}
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "amount-over-graph-container")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "text-500",
            "bold",
            "color-neutral-800"
          )}
          tag="div"
          {...amountProps}
        >
          {amount}
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "text-50", "medium")}
          tag="div"
        >
          {subtitle}
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
