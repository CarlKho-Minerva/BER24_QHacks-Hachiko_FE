import React from "react";
import * as _Builtin from "./_Builtin";
import { CardIconTop } from "./CardIconTop";
import { CardIconLeft } from "./CardIconLeft";
import { CardImageTop } from "./CardImageTop";
import * as _utils from "./utils";
import _styles from "./TabsV1.module.css";

export function TabsV1({
  as: _Component = _Builtin.TabsWrapper,
  firstTabLinkText = "Tab item",
  secondTabLinkText = "Tab item",
  thirdTabLinkText = "Tab item",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "flex-vertical", "align-center")}
      current="Tab 1"
      easing="ease"
      fadeIn={300}
      fadeOut={100}
    >
      <_Builtin.TabsMenu className={_utils.cx(_styles, "tabs-menu")} tag="div">
        <_Builtin.TabsLink
          className={_utils.cx(_styles, "tab-menu-badge-link")}
          data-w-tab="Tab 1"
          block="inline"
        >
          <_Builtin.Block tag="div">{firstTabLinkText}</_Builtin.Block>
        </_Builtin.TabsLink>
        <_Builtin.TabsLink
          className={_utils.cx(_styles, "tab-menu-badge-link")}
          data-w-tab="Tab 2"
          block="inline"
        >
          <_Builtin.Block tag="div">{secondTabLinkText}</_Builtin.Block>
        </_Builtin.TabsLink>
        <_Builtin.TabsLink
          className={_utils.cx(_styles, "tab-menu-badge-link")}
          data-w-tab="Tab 3"
          block="inline"
        >
          <_Builtin.Block tag="div">{thirdTabLinkText}</_Builtin.Block>
        </_Builtin.TabsLink>
      </_Builtin.TabsMenu>
      <_Builtin.TabsContent
        className={_utils.cx(_styles, "overflow-visible")}
        tag="div"
      >
        <_Builtin.TabsPane tag="div" data-w-tab="Tab 1">
          <CardIconTop />
        </_Builtin.TabsPane>
        <_Builtin.TabsPane tag="div" data-w-tab="Tab 2">
          <CardIconLeft />
        </_Builtin.TabsPane>
        <_Builtin.TabsPane tag="div" data-w-tab="Tab 3">
          <CardImageTop />
        </_Builtin.TabsPane>
      </_Builtin.TabsContent>
    </_Component>
  );
}
