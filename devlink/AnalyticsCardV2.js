import React from "react";
import * as _Builtin from "./_Builtin";
import { BadgeGreen } from "./BadgeGreen";
import { BadgeRed } from "./BadgeRed";
import * as _utils from "./utils";
import _styles from "./AnalyticsCardV2.module.css";

export function AnalyticsCardV2({
  as: _Component = _Builtin.Block,
  amount = "1,805",
  amountProps = {},
  title = "Card title",
  greenBadgeVisibility = true,
  redBadgeVisibility = false,
  contentSlot,
  greenBadgeText = "Default",
  redBadgeText = "Default",
}) {
  return (
    <_Component className={_utils.cx(_styles, "card", "pd-16px")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "mg-bottom-16px")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "_2-items-wrap-container",
            "align-start",
            "gap-column-20px"
          )}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "grid-1-column", "gap-row-8px")}
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
              id={_utils.cx(
                _styles,
                "w-node-_56cd9ec0-8336-c57b-b4c4-2405e9490cc3-e9490cbd"
              )}
              tag="div"
            >
              {title}
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block tag="div">
            {greenBadgeVisibility ? (
              <_Builtin.Block tag="div">
                <BadgeGreen text={greenBadgeText} />
              </_Builtin.Block>
            ) : null}
            {redBadgeVisibility ? (
              <_Builtin.Block tag="div">
                <BadgeRed text={redBadgeText} />
              </_Builtin.Block>
            ) : null}
          </_Builtin.Block>
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
            src="https://uploads-ssl.webflow.com/660d670d57461f6bb915c687/660d670e57461f6bb915c824_analytics-card-graph-2-dashflow-webflow-template.svg"
          />
        )}
      </_Builtin.Block>
    </_Component>
  );
}
