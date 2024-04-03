import React from "react";
import * as _Builtin from "./_Builtin";
import { BreadcrumbV1Item } from "./BreadcrumbV1Item";
import { BreadcrumbV1CurrentItem } from "./BreadcrumbV1CurrentItem";
import * as _utils from "./utils";
import _styles from "./BreadcrumbsV1.module.css";

export function BreadcrumbsV1({
  as: _Component = _Builtin.Block,
  breadcrumbWrapperSlot,
}) {
  return (
    <_Component className={_utils.cx(_styles, "breadcrumb-wrapper")} tag="div">
      {breadcrumbWrapperSlot ?? (
        <>
          <BreadcrumbV1Item />
          <BreadcrumbV1Item />
          <BreadcrumbV1CurrentItem />
        </>
      )}
    </_Component>
  );
}
