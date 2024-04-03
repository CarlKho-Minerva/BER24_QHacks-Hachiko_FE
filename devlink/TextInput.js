import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./TextInput.module.css";

export function TextInput({
  as: _Component = _Builtin.Block,
  labelText = "Label",
  labelVisibility = true,
  inputProps = {},
  inputVisibility = true,
  inputIconRightVisibility = false,
  inputIconLeftVisibility = false,
  inputIconRightProps = {},
  inputIconLeftProps = {},
  inputIconRightImage = "https://uploads-ssl.webflow.com/660d670d57461f6bb915c687/660d670e57461f6bb915c8b6_input-search-icon-dashflow-webflow-template.svg",
  inputIconLeftImage = "https://uploads-ssl.webflow.com/660d670d57461f6bb915c687/660d670e57461f6bb915c8b6_input-search-icon-dashflow-webflow-template.svg",
}) {
  return (
    <_Component tag="div">
      {labelVisibility ? (
        <_Builtin.FormBlockLabel htmlFor="Name-3">
          {labelText}
        </_Builtin.FormBlockLabel>
      ) : null}
      {inputVisibility ? (
        <_Builtin.Block tag="div">
          <_Builtin.FormTextInput
            className={_utils.cx(_styles, "input")}
            autoFocus={false}
            maxLength={256}
            name="Name"
            data-name="Name"
            placeholder="Placeholder"
            type="text"
            disabled={false}
            required={false}
            id="Name-3"
            {...inputProps}
          />
        </_Builtin.Block>
      ) : null}
      {inputIconRightVisibility ? (
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "position-relative---z-index-1",
            "flex-horizontal"
          )}
          tag="div"
        >
          <_Builtin.FormTextInput
            className={_utils.cx(_styles, "input", "icon-inside-right")}
            autoFocus={false}
            maxLength={256}
            name="Name-4"
            data-name="Name 4"
            placeholder="Placeholder"
            type="text"
            disabled={false}
            required={false}
            id="Name-4"
            {...inputIconRightProps}
          />
          <_Builtin.Image
            className={_utils.cx(_styles, "icon-inside-input-right")}
            loading="eager"
            width="12"
            height="auto"
            alt=""
            src={inputIconRightImage}
          />
        </_Builtin.Block>
      ) : null}
      {inputIconLeftVisibility ? (
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "position-relative---z-index-1",
            "flex-horizontal"
          )}
          tag="div"
        >
          <_Builtin.FormTextInput
            className={_utils.cx(_styles, "input", "icon-inside-left")}
            autoFocus={false}
            maxLength={256}
            name="Name-4"
            data-name="Name 4"
            placeholder="Placeholder"
            type="text"
            disabled={false}
            required={false}
            id="Name-4"
            {...inputIconLeftProps}
          />
          <_Builtin.Image
            className={_utils.cx(_styles, "icon-inside-input-left")}
            loading="eager"
            width="auto"
            height="auto"
            alt=""
            src={inputIconLeftImage}
          />
        </_Builtin.Block>
      ) : null}
    </_Component>
  );
}
