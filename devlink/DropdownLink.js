import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import { Checkbox } from "./Checkbox";
import * as _utils from "./utils";
import _styles from "./DropdownLink.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-2654":{"id":"e-2654","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-134","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2655"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"68b369b6-3be6-7f09-b964-343832956200","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"68b369b6-3be6-7f09-b964-343832956200","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1684940994404},"e-2655":{"id":"e-2655","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-135","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2654"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"68b369b6-3be6-7f09-b964-343832956200","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"68b369b6-3be6-7f09-b964-343832956200","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1684940994407}},"actionLists":{"a-134":{"id":"a-134","title":"✅ Checkbox Activate","actionItemGroups":[{"actionItems":[{"id":"a-134-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".checkbox-bg","selectorGuids":["a55990c8-c1f5-933c-2ac6-9e53180f9bdd"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1684887092556},"a-135":{"id":"a-135","title":"✅ Checkbox Disable","actionItemGroups":[{"actionItems":[{"id":"a-135-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".checkbox-bg","selectorGuids":["a55990c8-c1f5-933c-2ac6-9e53180f9bdd"]},"value":0,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1684887092556}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function DropdownLink({
  as: _Component = _Builtin.Link,
  checkboxVisibility = false,
  iconVisibility = false,
  iconImage = "https://uploads-ssl.webflow.com/660d670d57461f6bb915c687/660d670e57461f6bb915c89c_dropdown-item-1-icon-dashflow-webflow-template.svg",
  linkText = "Dropdown item #1",
  checkboxProps = {},
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "dropdown-link-wrapper")}
      data-w-id="68b369b6-3be6-7f09-b964-343832956200"
      button={false}
      block="inline"
      options={{
        href: "#",
      }}
    >
      {checkboxVisibility ? (
        <_Builtin.Block
          className={_utils.cx(_styles, "position-relative---z-index--1")}
          tag="div"
        >
          <Checkbox
            checkboxProps={checkboxProps}
            checkboxLabelVisibility={false}
          />
        </_Builtin.Block>
      ) : null}
      {iconVisibility ? (
        <_Builtin.Image
          className={_utils.cx(_styles, "max-w-12px", "mg-right-4px")}
          loading="eager"
          width="auto"
          height="auto"
          alt=""
          src={iconImage}
        />
      ) : null}
      <_Builtin.Block tag="div">{linkText}</_Builtin.Block>
    </_Component>
  );
}
