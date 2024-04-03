import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./BottomTooltip.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-2410":{"id":"e-2410","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-122","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2411"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"1d426e64-f789-ee8f-5504-71af877ec3a3","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"1d426e64-f789-ee8f-5504-71af877ec3a3","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1683320102837},"e-2411":{"id":"e-2411","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-123","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2410"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"1d426e64-f789-ee8f-5504-71af877ec3a3","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"1d426e64-f789-ee8f-5504-71af877ec3a3","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1683320102838},"e-2412":{"id":"e-2412","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-122","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2413"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"5c80fe5c-7a65-93ba-d547-cfe066a83107","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"5c80fe5c-7a65-93ba-d547-cfe066a83107","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1683324883318},"e-2413":{"id":"e-2413","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-123","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2412"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"5c80fe5c-7a65-93ba-d547-cfe066a83107","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"5c80fe5c-7a65-93ba-d547-cfe066a83107","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1683324883318},"e-2414":{"id":"e-2414","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-122","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2415"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"48cbf681-5c64-437d-2f4c-63b35ed15c39","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"48cbf681-5c64-437d-2f4c-63b35ed15c39","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1683325272825},"e-2415":{"id":"e-2415","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-123","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2414"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"48cbf681-5c64-437d-2f4c-63b35ed15c39","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"48cbf681-5c64-437d-2f4c-63b35ed15c39","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1683325272825},"e-2416":{"id":"e-2416","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-122","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2417"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"ebba8b13-ad5e-1664-3794-f42c5af7971a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"ebba8b13-ad5e-1664-3794-f42c5af7971a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1683325720181},"e-2417":{"id":"e-2417","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-123","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2416"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"ebba8b13-ad5e-1664-3794-f42c5af7971a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"ebba8b13-ad5e-1664-3794-f42c5af7971a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1683325720181}},"actionLists":{"a-122":{"id":"a-122","title":"💬 Tooltip Hover In","actionItemGroups":[{"actionItems":[{"id":"a-122-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".tooltip","selectorGuids":["bcf458fd-8cd0-32b3-4cfb-177bf924c767"]},"value":0,"unit":""}},{"id":"a-122-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".tooltip","selectorGuids":["bcf458fd-8cd0-32b3-4cfb-177bf924c767"]},"value":"none"}}]},{"actionItems":[{"id":"a-122-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".tooltip","selectorGuids":["bcf458fd-8cd0-32b3-4cfb-177bf924c767"]},"value":"flex"}}]},{"actionItems":[{"id":"a-122-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".tooltip","selectorGuids":["bcf458fd-8cd0-32b3-4cfb-177bf924c767"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1683320106501},"a-123":{"id":"a-123","title":"💬 Tooltip Hover Out","actionItemGroups":[{"actionItems":[{"id":"a-123-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".tooltip","selectorGuids":["bcf458fd-8cd0-32b3-4cfb-177bf924c767"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-123-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".tooltip","selectorGuids":["bcf458fd-8cd0-32b3-4cfb-177bf924c767"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1683320106501}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function BottomTooltip({
  as: _Component = _Builtin.Block,
  text = "Simple text",
  tooltipText = "Bottom tooltip",
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(
        _styles,
        "display-inline-block",
        "position-relative---z-index-1"
      )}
      data-w-id="ebba8b13-ad5e-1664-3794-f42c5af7971a"
      tag="div"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "flex-vertical", "align-center")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "text-100",
            "medium",
            "color-neutral-800"
          )}
          tag="div"
        >
          {text}
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "tooltip", "bottom")}
          tag="div"
        >
          <_Builtin.Block className={_utils.cx(_styles, "width-100")} tag="div">
            {tooltipText}
          </_Builtin.Block>
          <_Builtin.Image
            className={_utils.cx(_styles, "tooltip-triangle-top")}
            loading="eager"
            width="auto"
            height="auto"
            alt=""
            src="https://uploads-ssl.webflow.com/660d670d57461f6bb915c687/660d670e57461f6bb915c838_tooltip-triangle-top-dashflow-webflow-template.svg"
          />
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
