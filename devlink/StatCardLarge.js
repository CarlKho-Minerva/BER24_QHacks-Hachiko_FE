import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./StatCardLarge.module.css";

export function StatCardLarge({
  as: _Component = _Builtin.Block,
  image = "https://uploads-ssl.webflow.com/660d670d57461f6bb915c687/660d670e57461f6bb915c822_stat-card-square-icon-dashflow-webflow-template.png",
  date = "March 22",
  dateProps = {},
  title = "Card title",
  amount = "50.88K",
  amountProps = {},
  greenDataVisibility = true,
  greenDataAmount = "24%",
  greenDataAmountProps = {},
  greenDataIconVisibility = true,
  redDataVisibility = false,
  redDataAmount = "24%",
  redDataAmountProps = {},
  redDataIconVisibility = true,
}) {
  return (
    <_Component className={_utils.cx(_styles, "card", "pd-16px")} tag="div">
      <_Builtin.Block
        className={_utils.cx(
          _styles,
          "_2-items-wrap-container",
          "align-start",
          "mg-bottom-16px"
        )}
        tag="div"
      >
        <_Builtin.Image
          className={_utils.cx(_styles, "card-icon-square", "_26px")}
          loading="eager"
          width="auto"
          height="auto"
          alt=""
          src={image}
        />
        <_Builtin.Block
          className={_utils.cx(_styles, "text-50", "medium")}
          tag="div"
          {...dateProps}
        >
          {date}
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "text-50", "medium", "mg-bottom-12px")}
        tag="div"
      >
        {title}
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(
          _styles,
          "_2-items-wrap-container",
          "amount-and-data"
        )}
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
    </_Component>
  );
}
