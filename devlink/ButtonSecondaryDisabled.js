import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./ButtonSecondaryDisabled.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-2354":{"id":"e-2354","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-6","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2355"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"dc3b625c-4a68-4ebe-9b74-d3193fa9f32f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"dc3b625c-4a68-4ebe-9b74-d3193fa9f32f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1683059180180},"e-2355":{"id":"e-2355","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-7","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2354"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"dc3b625c-4a68-4ebe-9b74-d3193fa9f32f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"dc3b625c-4a68-4ebe-9b74-d3193fa9f32f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1683059180180},"e-2356":{"id":"e-2356","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-6","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2357"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"5228fae3-1046-92bf-afc3-a85185c5a451","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"5228fae3-1046-92bf-afc3-a85185c5a451","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1683065701346},"e-2357":{"id":"e-2357","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-7","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2356"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"5228fae3-1046-92bf-afc3-a85185c5a451","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"5228fae3-1046-92bf-afc3-a85185c5a451","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1683065701346},"e-2370":{"id":"e-2370","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-6","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2371"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"336d32d4-f757-e4cb-8a22-e861d16616c5","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"336d32d4-f757-e4cb-8a22-e861d16616c5","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1683141503174},"e-2371":{"id":"e-2371","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-7","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2370"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"336d32d4-f757-e4cb-8a22-e861d16616c5","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"336d32d4-f757-e4cb-8a22-e861d16616c5","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1683141503175},"e-2372":{"id":"e-2372","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-6","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2373"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"e0b09591-1f95-fc6e-9ad3-43336eed97ed","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e0b09591-1f95-fc6e-9ad3-43336eed97ed","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1683144599609},"e-2373":{"id":"e-2373","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-7","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2372"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"e0b09591-1f95-fc6e-9ad3-43336eed97ed","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e0b09591-1f95-fc6e-9ad3-43336eed97ed","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1683144599609},"e-2374":{"id":"e-2374","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-6","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2375"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"0975fc45-f5a8-822e-62f2-e213b7c55d3f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"0975fc45-f5a8-822e-62f2-e213b7c55d3f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1683144883194},"e-2375":{"id":"e-2375","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-7","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2374"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"0975fc45-f5a8-822e-62f2-e213b7c55d3f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"0975fc45-f5a8-822e-62f2-e213b7c55d3f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1683144883194},"e-2376":{"id":"e-2376","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-6","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2377"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"4a7528d0-6081-1722-e3b6-d6905b2cf336","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"4a7528d0-6081-1722-e3b6-d6905b2cf336","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1683146192790},"e-2377":{"id":"e-2377","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-7","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2376"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"4a7528d0-6081-1722-e3b6-d6905b2cf336","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"4a7528d0-6081-1722-e3b6-d6905b2cf336","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1683146192790},"e-2608":{"id":"e-2608","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-6","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2609"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"660d670e57461f6bb915c7fb|0ff34584-7b11-7a32-7fea-388c3b3fc2e0","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"660d670e57461f6bb915c7fb|0ff34584-7b11-7a32-7fea-388c3b3fc2e0","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1683647251576},"e-2609":{"id":"e-2609","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-7","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2608"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"660d670e57461f6bb915c7fb|0ff34584-7b11-7a32-7fea-388c3b3fc2e0","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"660d670e57461f6bb915c7fb|0ff34584-7b11-7a32-7fea-388c3b3fc2e0","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1683647251576},"e-2612":{"id":"e-2612","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-6","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2613"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"660d670e57461f6bb915c7d0|e19574ea-ebba-c19d-86c2-44b4e947035b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"660d670e57461f6bb915c7d0|e19574ea-ebba-c19d-86c2-44b4e947035b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1683649370124},"e-2613":{"id":"e-2613","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-7","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2612"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"660d670e57461f6bb915c7d0|e19574ea-ebba-c19d-86c2-44b4e947035b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"660d670e57461f6bb915c7d0|e19574ea-ebba-c19d-86c2-44b4e947035b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1683649370124}},"actionLists":{"a-6":{"id":"a-6","title":"➡️ Link Icon Right - Hover In","actionItemGroups":[{"actionItems":[{"id":"a-6-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".link-icon.arrow-right","selectorGuids":["fd0143ee-14b5-6477-d80d-6c5eed6a0137","5db4323d-996c-2fcc-77cf-2474b92782bc"]},"xValue":4,"zValue":0.01,"xUnit":"px","yUnit":"PX","zUnit":"px"}},{"id":"a-6-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".line-rounded-icon.link-icon-right","selectorGuids":["2e8dd4ed-ef36-7a2f-c426-c8f795ebdb80","f764720d-9240-fa45-d7dd-5af9dc1070d9"]},"xValue":3,"zValue":0.01,"xUnit":"px","yUnit":"PX","zUnit":"px"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1636689302152},"a-7":{"id":"a-7","title":"➡️ Link Icon Right - Hover Out","actionItemGroups":[{"actionItems":[{"id":"a-7-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".link-icon.arrow-right","selectorGuids":["fd0143ee-14b5-6477-d80d-6c5eed6a0137","5db4323d-996c-2fcc-77cf-2474b92782bc"]},"xValue":0,"zValue":0,"xUnit":"px","yUnit":"PX","zUnit":"px"}},{"id":"a-7-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".line-rounded-icon.link-icon-right","selectorGuids":["2e8dd4ed-ef36-7a2f-c426-c8f795ebdb80","f764720d-9240-fa45-d7dd-5af9dc1070d9"]},"xValue":0,"zValue":0,"xUnit":"px","yUnit":"PX","zUnit":"px"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1636689362821}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function ButtonSecondaryDisabled({
  as: _Component = _Builtin.Link,

  link = {
    href: "#",
  },

  text = "Default",
  iconLeftVisibility = false,
  iconLeftImage = "https://uploads-ssl.webflow.com/660d670d57461f6bb915c687/660d670e57461f6bb915c89a_disabled-button-icon-left-dashflow-webflow-template.svg",
  iconRightVisibility = false,
  iconRightImage = "https://uploads-ssl.webflow.com/660d670d57461f6bb915c687/660d670e57461f6bb915c89b_disabled-button-icon-right-dashflow-webflow-template.svg",
  buttonProps = {},
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "btn-secondary", "disabled")}
      button={false}
      block="inline"
      options={link}
      {...buttonProps}
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "flex-horizontal", "gap-column-4px")}
        tag="div"
      >
        {iconLeftVisibility ? (
          <_Builtin.Image
            className={_utils.cx(_styles, "link-icon")}
            loading="eager"
            width="auto"
            height="auto"
            alt=""
            src={iconLeftImage}
          />
        ) : null}
        <_Builtin.Block tag="div">{text}</_Builtin.Block>
        {iconRightVisibility ? (
          <_Builtin.Image
            className={_utils.cx(_styles, "link-icon")}
            loading="eager"
            width="auto"
            height="auto"
            alt=""
            src={iconRightImage}
          />
        ) : null}
      </_Builtin.Block>
    </_Component>
  );
}