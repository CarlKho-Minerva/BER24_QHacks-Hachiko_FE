import React from "react";
import * as _Builtin from "./_Builtin";
import { UserTableRow } from "./UserTableRow";
import * as _utils from "./utils";
import _styles from "./UserTable.module.css";

export function UserTable({
  as: _Component = _Builtin.Block,
  firstColumnTitle = "Name",
  secondColumnTitle = "Title",
  thirdColumnTitle = "Status",
  fourthColumnTitle = "Role",
  rowsSlot,
}) {
  return (
    <_Component className={_utils.cx(_styles, "grid-1-column")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "card", "overflow-hidden", "border-none")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "overflow-auto")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "user-table-row", "table-header")}
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
                "w-node-_0330f094-27d3-4170-8a84-42589737fda7-9737fda3"
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
                "w-node-_0330f094-27d3-4170-8a84-42589737fda9-9737fda3"
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
                "w-node-_0330f094-27d3-4170-8a84-42589737fdab-9737fda3"
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
                "w-node-_0330f094-27d3-4170-8a84-42589737fdad-9737fda3"
              )}
              tag="div"
            >
              {fourthColumnTitle}
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block className={_utils.cx(_styles, "rows")} tag="div">
            {rowsSlot ?? (
              <>
                <UserTableRow />
                <UserTableRow
                  avatar="https://uploads-ssl.webflow.com/660d670d57461f6bb915c687/660d670e57461f6bb915c829_sophie-moore-avatar-dashflow-webflow-template.jpg"
                  name="Sophie Moore"
                  email="sophie@dashflow.com"
                  jobTitle="CTO & Co-Founder"
                  role="Member"
                />
                <UserTableRow
                  avatar="https://uploads-ssl.webflow.com/660d670d57461f6bb915c687/660d670e57461f6bb915c830_andy-smith-avatar-dashflow-webflow-template.jpg"
                  name="Andy Smith"
                  email="andy@dashflow.com"
                  jobTitle="VP of Marketing"
                  role="Member"
                />
                <UserTableRow
                  avatar="https://uploads-ssl.webflow.com/660d670d57461f6bb915c687/660d670e57461f6bb915c82a_lily-woods-avatar-dashflow-webflow-template.jpg"
                  name="Lily Woods"
                  email="lily@dashflow.com"
                  jobTitle="VP of Design"
                  role="Member"
                />
              </>
            )}
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
