import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./DataTableRow.module.css";

export function DataTableRow({
  as: _Component = _Builtin.Block,
  name = "John Carter",
  email = "john@dataplus.com",
  phone = "(487) 180 - 5048",
  company = "Dataplus X",
  country = "United States",
}) {
  return (
    <_Component className={_utils.cx(_styles, "data-table-row")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "text-100", "bold", "color-neutral-800")}
        id={_utils.cx(
          _styles,
          "w-node-_269d1d2d-2cb2-3200-d275-6492145f0d89-145f0d88"
        )}
        tag="div"
      >
        {name}
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "text-100", "medium")}
        id={_utils.cx(
          _styles,
          "w-node-_269d1d2d-2cb2-3200-d275-6492145f0d8b-145f0d88"
        )}
        tag="div"
      >
        {email}
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "text-100", "medium")}
        id={_utils.cx(
          _styles,
          "w-node-_269d1d2d-2cb2-3200-d275-6492145f0d8d-145f0d88"
        )}
        tag="div"
      >
        {phone}
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "text-100", "medium")}
        id={_utils.cx(
          _styles,
          "w-node-_269d1d2d-2cb2-3200-d275-6492145f0d8f-145f0d88"
        )}
        tag="div"
      >
        {company}
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "text-100", "medium")}
        id={_utils.cx(
          _styles,
          "w-node-_269d1d2d-2cb2-3200-d275-6492145f0d91-145f0d88"
        )}
        tag="div"
      >
        {country}
      </_Builtin.Block>
    </_Component>
  );
}
