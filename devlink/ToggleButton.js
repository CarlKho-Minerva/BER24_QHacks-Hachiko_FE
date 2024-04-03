import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./ToggleButton.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-2358":{"id":"e-2358","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-115","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2359"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"5576c56d-514a-21ef-8326-50e2aba1df4e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"5576c56d-514a-21ef-8326-50e2aba1df4e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1683129979294},"e-2359":{"id":"e-2359","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-116","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2358"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"5576c56d-514a-21ef-8326-50e2aba1df4e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"5576c56d-514a-21ef-8326-50e2aba1df4e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1683129979295},"e-2644":{"id":"e-2644","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-116","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2645"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"660d670e57461f6bb915c7d3|9e2919e9-df9d-7587-a0ce-1b94071dea3f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"660d670e57461f6bb915c7d3|9e2919e9-df9d-7587-a0ce-1b94071dea3f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1684880292253},"e-2645":{"id":"e-2645","name":"","animationType":"preset","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-115","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2644"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"660d670e57461f6bb915c7d3|9e2919e9-df9d-7587-a0ce-1b94071dea3f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"660d670e57461f6bb915c7d3|9e2919e9-df9d-7587-a0ce-1b94071dea3f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1684880292253}},"actionLists":{"a-115":{"id":"a-115","title":"🔵 Toggle Button Activate","actionItemGroups":[{"actionItems":[{"id":"a-115-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".toggle-button-bg","selectorGuids":["a74ee628-ecd7-fabb-009b-302811cd4472"]},"value":1,"unit":""}},{"id":"a-115-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".toggle-button-circle-inside","selectorGuids":["87b74aa0-6688-a882-558e-0fc597aaa36d"]},"xValue":14,"xUnit":"px","yUnit":"PX","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1683129982122},"a-116":{"id":"a-116","title":"🔵 Toggle Button Disable","actionItemGroups":[{"actionItems":[{"id":"a-116-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".toggle-button-bg","selectorGuids":["a74ee628-ecd7-fabb-009b-302811cd4472"]},"value":0,"unit":""}},{"id":"a-116-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".toggle-button-circle-inside","selectorGuids":["87b74aa0-6688-a882-558e-0fc597aaa36d"]},"xValue":0,"xUnit":"px","yUnit":"PX","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1683129982122}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function ToggleButton({
  as: _Component = _Builtin.Block,
  labelText = "Off",
  toggleButtonWrapperProps = {},
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(
        _styles,
        "flex-horizontal",
        "justify-start",
        "gap-column-12px"
      )}
      tag="div"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "toggle-button-wrapper")}
        data-w-id="5576c56d-514a-21ef-8326-50e2aba1df4e"
        tag="div"
        {...toggleButtonWrapperProps}
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "toggle-button-bg")}
          tag="div"
        />
        <_Builtin.Block
          className={_utils.cx(_styles, "toggle-button-circle-inside")}
          tag="div"
        />
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "text-100", "medium")}
        tag="div"
      >
        {labelText}
      </_Builtin.Block>
    </_Component>
  );
}
