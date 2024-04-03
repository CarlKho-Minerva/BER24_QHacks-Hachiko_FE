import React from "react";
import * as _Builtin from "./_Builtin";
import { BadgeGreen } from "./BadgeGreen";
import { BadgeRed } from "./BadgeRed";
import * as _utils from "./utils";
import _styles from "./StatCardSmall.module.css";

export function StatCardSmall({
  as: _Component = _Builtin.Block,
  title = "Card title",
  amount = "50.88K",
  amountProps = {},
  badgeGreenVisibility = true,
  badgeGreenText = "Default",
  badgeRedVisibility = false,
  badgeRedText = "Default",
}) {
  return (
    <_Component className={_utils.cx(_styles, "card", "pd-24px")} tag="div">
      <_Builtin.Block
        className={_utils.cx(
          _styles,
          "_2-items-wrap-container",
          "amount-and-data",
          "justify-space-between"
        )}
        tag="div"
      >
        <_Builtin.Block tag="div">
          <_Builtin.Block
            className={_utils.cx(_styles, "text-50", "medium")}
            tag="div"
          >
            {title}
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "text-400",
              "bold",
              "color-neutral-800"
            )}
            tag="div"
            {...amountProps}
          >
            {amount}
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block tag="div">
          {badgeGreenVisibility ? (
            <_Builtin.Block tag="div">
              <BadgeGreen text={badgeGreenText} />
            </_Builtin.Block>
          ) : null}
          {badgeRedVisibility ? (
            <_Builtin.Block tag="div">
              <BadgeRed text={badgeRedText} />
            </_Builtin.Block>
          ) : null}
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
