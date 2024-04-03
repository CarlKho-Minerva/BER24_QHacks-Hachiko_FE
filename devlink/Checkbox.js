import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./Checkbox.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-2650":{"id":"e-2650","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-134","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2651"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"70259ad8-58e3-0b35-01cc-cbd9a74cfd28","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"70259ad8-58e3-0b35-01cc-cbd9a74cfd28","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1684940558187},"e-2651":{"id":"e-2651","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-135","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2650"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"70259ad8-58e3-0b35-01cc-cbd9a74cfd28","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"70259ad8-58e3-0b35-01cc-cbd9a74cfd28","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1684940558194},"e-2652":{"id":"e-2652","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-135","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2653"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"660d670e57461f6bb915c7d3|20c36008-a1b6-a059-ce28-9bb688c01e0c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"660d670e57461f6bb915c7d3|20c36008-a1b6-a059-ce28-9bb688c01e0c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1684940803171},"e-2653":{"id":"e-2653","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-134","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2652"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"660d670e57461f6bb915c7d3|20c36008-a1b6-a059-ce28-9bb688c01e0c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"660d670e57461f6bb915c7d3|20c36008-a1b6-a059-ce28-9bb688c01e0c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1684940803174},"e-2654":{"id":"e-2654","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-134","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2655"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"68b369b6-3be6-7f09-b964-343832956200","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"68b369b6-3be6-7f09-b964-343832956200","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1684940994404},"e-2655":{"id":"e-2655","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-135","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2654"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"68b369b6-3be6-7f09-b964-343832956200","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"68b369b6-3be6-7f09-b964-343832956200","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1684940994407}},"actionLists":{"a-134":{"id":"a-134","title":"✅ Checkbox Activate","actionItemGroups":[{"actionItems":[{"id":"a-134-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".checkbox-bg","selectorGuids":["a55990c8-c1f5-933c-2ac6-9e53180f9bdd"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1684887092556},"a-135":{"id":"a-135","title":"✅ Checkbox Disable","actionItemGroups":[{"actionItems":[{"id":"a-135-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".checkbox-bg","selectorGuids":["a55990c8-c1f5-933c-2ac6-9e53180f9bdd"]},"value":0,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1684887092556}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Checkbox({
  as: _Component = _Builtin.Block,
  checkboxProps = {},
  checkboxLabelText = "Checkbox",
  checkboxLabelVisibility = true,
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "checkbox-and-label-container")}
      tag="div"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "checkbox-wrapper")}
        data-w-id="70259ad8-58e3-0b35-01cc-cbd9a74cfd28"
        tag="div"
        {...checkboxProps}
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "checkbox", "mg-right-0")}
          tag="div"
        />
        <_Builtin.Block className={_utils.cx(_styles, "checkbox-bg")} tag="div">
          <_Builtin.Image
            loading="eager"
            width="auto"
            height="auto"
            alt=""
            src="https://uploads-ssl.webflow.com/660d670d57461f6bb915c687/660d670e57461f6bb915c8b9_checkbox-icon-inside-dashflow-webflow-template.svg"
          />
        </_Builtin.Block>
      </_Builtin.Block>
      {checkboxLabelVisibility ? (
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "text-100",
            "medium",
            "color-neutral-600"
          )}
          tag="div"
        >
          {checkboxLabelText}
        </_Builtin.Block>
      ) : null}
    </_Component>
  );
}
