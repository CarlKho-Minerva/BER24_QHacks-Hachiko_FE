import React from "react";
import * as _Builtin from "./_Builtin";
import { DataTableRow } from "./DataTableRow";
import * as _utils from "./utils";
import _styles from "./DataTable.module.css";

export function DataTable({
  as: _Component = _Builtin.Block,
  firstColumnTitle = "Name",
  secondColumnTitle = "Email",
  thirdColumnTitle = "Phone",
  fourthColumnTitle = "Company",
  fifthColumnTitle = "Country",
  rowsSlot,
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "grid-1-column")}
      id={_utils.cx(
        _styles,
        "w-node-b5abc023-9406-e29e-4a73-d0657c71dff2-7c71dff2"
      )}
      tag="div"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "card", "overflow-hidden", "border-none")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "overflow-auto")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "data-table-row", "table-header")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "text-50",
                "bold",
                "color-neutral-700"
              )}
              id={_utils.cx(
                _styles,
                "w-node-b5abc023-9406-e29e-4a73-d0657c71dff6-7c71dff2"
              )}
              tag="div"
            >
              {firstColumnTitle}
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "text-50",
                "bold",
                "color-neutral-700"
              )}
              id={_utils.cx(
                _styles,
                "w-node-b5abc023-9406-e29e-4a73-d0657c71dff8-7c71dff2"
              )}
              tag="div"
            >
              {secondColumnTitle}
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "text-50",
                "bold",
                "color-neutral-700"
              )}
              id={_utils.cx(
                _styles,
                "w-node-b5abc023-9406-e29e-4a73-d0657c71dffa-7c71dff2"
              )}
              tag="div"
            >
              {thirdColumnTitle}
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "text-50",
                "bold",
                "color-neutral-700"
              )}
              id={_utils.cx(
                _styles,
                "w-node-b5abc023-9406-e29e-4a73-d0657c71dffc-7c71dff2"
              )}
              tag="div"
            >
              {fourthColumnTitle}
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "text-50",
                "bold",
                "color-neutral-700"
              )}
              id={_utils.cx(
                _styles,
                "w-node-b5abc023-9406-e29e-4a73-d0657c71dffe-7c71dff2"
              )}
              tag="div"
            >
              {fifthColumnTitle}
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block className={_utils.cx(_styles, "rows")} tag="div">
            {rowsSlot ?? (
              <>
                <DataTableRow />
                <DataTableRow
                  name="Sophie Moore"
                  email="sophiemoore@saasly.com"
                  phone="(901) 870 - 6507"
                  company="Saasly X"
                  country="Canada"
                />
                <DataTableRow
                  company="Promoplus X"
                  name="Andy Smith"
                  email="andy@promoplus.com"
                  phone="(317) 197 - 0475"
                  country="Australia"
                />
                <DataTableRow
                  name="Lily Woods"
                  email="lily@startuper.com"
                  phone="(574) 048 - 6947"
                  company="Startuper X"
                  country="United States"
                />
              </>
            )}
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
