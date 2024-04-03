import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./TextAreaInput.module.css";

export function TextAreaInput({
  as: _Component = _Builtin.Block,
  labelText = "Label",
  labelVisibility = true,
  textAreaIconImage = "https://uploads-ssl.webflow.com/660d670d57461f6bb915c687/660d670e57461f6bb915c8b7_text-area-icon-inside-dashflow-webflow-template.svg",
  textAreaProps = {},
  textAreaIconLeftProps = {},
  textAreaVisibility = true,
  textAreaIconLeftVisibility = false,
}) {
  return (
    <_Component tag="div">
      {labelVisibility ? (
        <_Builtin.FormBlockLabel htmlFor="Placeholder-2">
          {labelText}
        </_Builtin.FormBlockLabel>
      ) : null}
      {textAreaVisibility ? (
        <_Builtin.Block tag="div">
          <_Builtin.FormTextarea
            className={_utils.cx(_styles, "text-area")}
            required={false}
            autoFocus={false}
            placeholder="Placeholder"
            maxLength={5000}
            name="Placeholder-2"
            data-name="Placeholder 2"
            id="Placeholder-2"
            {...textAreaProps}
          />
        </_Builtin.Block>
      ) : null}
      {textAreaIconLeftVisibility ? (
        <_Builtin.Block
          className={_utils.cx(_styles, "position-relative---z-index-1")}
          tag="div"
        >
          <_Builtin.FormTextarea
            className={_utils.cx(_styles, "text-area", "icon-inside")}
            required={false}
            autoFocus={false}
            placeholder="Placeholder"
            maxLength={5000}
            name="Placeholder-2"
            data-name="Placeholder 2"
            id="Placeholder-2"
            {...textAreaIconLeftProps}
          />
          <_Builtin.Image
            className={_utils.cx(_styles, "text-area-icon-inside")}
            loading="eager"
            width="auto"
            height="auto"
            alt=""
            src={textAreaIconImage}
          />
        </_Builtin.Block>
      ) : null}
    </_Component>
  );
}
