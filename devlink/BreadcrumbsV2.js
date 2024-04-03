import React from "react";
import * as _Builtin from "./_Builtin";
import { BreadcrumbV2Item } from "./BreadcrumbV2Item";
import { BreadcrumbV2CurrentItem } from "./BreadcrumbV2CurrentItem";
import * as _utils from "./utils";
import _styles from "./BreadcrumbsV2.module.css";

export function BreadcrumbsV2({
  as: _Component = _Builtin.Block,
  breadcrumbWrapperSlot,
}) {
  return (
    <_Component className={_utils.cx(_styles, "breadcrumb-wrapper")} tag="div">
      {breadcrumbWrapperSlot ?? (
        <>
          <BreadcrumbV2Item />
          <BreadcrumbV2Item breadcrumbIconImage="https://uploads-ssl.webflow.com/660d670d57461f6bb915c687/660d670e57461f6bb915c833_breadcrumb-icon-2-dashflow-webflow-template.svg" />
          <BreadcrumbV2CurrentItem />
        </>
      )}
    </_Component>
  );
}
