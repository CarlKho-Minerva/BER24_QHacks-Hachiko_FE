import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./AnalyticsCardV1.module.css";

export function AnalyticsCardV1({
  as: _Component = _Builtin.Block,
  title = "Card title",
  amount = "$24,840.56",
  greenDataVisibility = true,
  redDataVisibility = false,
  greenDataAmount = "24%",
  redDataAmount = "24%",
  greenDataIconVisibility = true,
  redDataIconVisibility = true,
  amountProps = {},
  greenDataAmountProps = {},
  redDataAmountProps = {},
  contentSlot,
}) {
  return (
    <_Component className={_utils.cx(_styles, "card", "pd-16px")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "text-50", "medium", "mg-bottom-4px")}
        tag="div"
      >
        {title}
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(
          _styles,
          "_2-items-wrap-container",
          "amount-and-data",
          "mg-bottom-24px"
        )}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "text-300",
            "bold",
            "color-neutral-800"
          )}
          tag="div"
          {...amountProps}
        >
          {amount}
        </_Builtin.Block>
        <_Builtin.Block tag="div">
          {greenDataVisibility ? (
            <_Builtin.Block
              className={_utils.cx(_styles, "card-amount-container", "green")}
              tag="div"
            >
              <_Builtin.Block tag="div" {...greenDataAmountProps}>
                {greenDataAmount}
              </_Builtin.Block>
              {greenDataIconVisibility ? (
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "dashflow-custom-icon",
                    "icon-size-8px"
                  )}
                  tag="div"
                >
                  {""}
                </_Builtin.Block>
              ) : null}
            </_Builtin.Block>
          ) : null}
          {redDataVisibility ? (
            <_Builtin.Block
              className={_utils.cx(_styles, "card-amount-container", "red")}
              tag="div"
            >
              <_Builtin.Block tag="div" {...redDataAmountProps}>
                {redDataAmount}
              </_Builtin.Block>
              {redDataIconVisibility ? (
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "dashflow-custom-icon",
                    "icon-size-8px"
                  )}
                  tag="div"
                >
                  {""}
                </_Builtin.Block>
              ) : null}
            </_Builtin.Block>
          ) : null}
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
            src="https://uploads-ssl.webflow.com/660d670d57461f6bb915c687/660d670e57461f6bb915c825_analytics-card-graph-1-dashflow-webflow-template.svg"
          />
        )}
      </_Builtin.Block>
    </_Component>
  );
}
