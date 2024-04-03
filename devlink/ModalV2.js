import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import { ButtonSecondary } from "./ButtonSecondary";
import { ModalCardV2 } from "./ModalCardV2";
import * as _utils from "./utils";
import _styles from "./ModalV2.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-2388":{"id":"e-2388","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-121","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2389"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"b0bd8ce9-77d7-a022-5a1e-6061edaf3334","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"b0bd8ce9-77d7-a022-5a1e-6061edaf3334","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1683301465692},"e-2390":{"id":"e-2390","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-121","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2391"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"b7d62a90-60bc-d1b3-5389-85ab6300ad93","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"b7d62a90-60bc-d1b3-5389-85ab6300ad93","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1683302093882},"e-2394":{"id":"e-2394","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-121","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2395"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"a99c1661-31b6-9ad4-73d2-7f6491da01b3","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"a99c1661-31b6-9ad4-73d2-7f6491da01b3","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1683302735371},"e-2396":{"id":"e-2396","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-121","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2397"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"a99c1661-31b6-9ad4-73d2-7f6491da01bd","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"a99c1661-31b6-9ad4-73d2-7f6491da01bd","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1683302812850},"e-2428":{"id":"e-2428","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-120","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2429"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"cb4ad8db-05b6-b3e7-a766-c6040a962372","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"cb4ad8db-05b6-b3e7-a766-c6040a962372","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1683565405582},"e-2430":{"id":"e-2430","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-121","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2431"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"cb4ad8db-05b6-b3e7-a766-c6040a962377","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"cb4ad8db-05b6-b3e7-a766-c6040a962377","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1683565405582},"e-2640":{"id":"e-2640","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-120","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2641"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"a3508ca5-a024-de47-6584-e8a67cb35260","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"a3508ca5-a024-de47-6584-e8a67cb35260","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1684868692554},"e-2642":{"id":"e-2642","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-121","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2643"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"a3508ca5-a024-de47-6584-e8a67cb35265","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"a3508ca5-a024-de47-6584-e8a67cb35265","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1684868692554}},"actionLists":{"a-121":{"id":"a-121","title":"👁‍🗨 Modal Close","actionItemGroups":[{"actionItems":[{"id":"a-121-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"selector":".modal-wrapper","selectorGuids":["a301db83-dc4f-629e-14e0-bb8f5ef0e120"]},"value":0,"unit":""}},{"id":"a-121-n-7","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"selector":".modal-content-wrapper","selectorGuids":["1870f500-cead-3904-2e3a-f9dcddfdb8c2"]},"value":0,"unit":""}},{"id":"a-121-n-8","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"ease","duration":300,"target":{"selector":".modal-content-wrapper","selectorGuids":["1870f500-cead-3904-2e3a-f9dcddfdb8c2"]},"xValue":0.86,"yValue":0.86,"zValue":1.01,"locked":true}}]},{"actionItems":[{"id":"a-121-n-5","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".modal-wrapper","selectorGuids":["a301db83-dc4f-629e-14e0-bb8f5ef0e120"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1683300132020},"a-120":{"id":"a-120","title":"👁‍🗨 Modal Open","actionItemGroups":[{"actionItems":[{"id":"a-120-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".modal-wrapper","selectorGuids":["a301db83-dc4f-629e-14e0-bb8f5ef0e120"]},"value":"none"}},{"id":"a-120-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".modal-wrapper","selectorGuids":["a301db83-dc4f-629e-14e0-bb8f5ef0e120"]},"value":0,"unit":""}},{"id":"a-120-n-6","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".modal-content-wrapper","selectorGuids":["1870f500-cead-3904-2e3a-f9dcddfdb8c2"]},"xValue":0.86,"yValue":0.86,"zValue":1.01,"locked":true}},{"id":"a-120-n-7","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".modal-content-wrapper","selectorGuids":["1870f500-cead-3904-2e3a-f9dcddfdb8c2"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-120-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".modal-wrapper","selectorGuids":["a301db83-dc4f-629e-14e0-bb8f5ef0e120"]},"value":"flex"}},{"id":"a-120-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"SIBLINGS","selector":".modal-wrapper","selectorGuids":["a301db83-dc4f-629e-14e0-bb8f5ef0e120"]},"value":1,"unit":""}},{"id":"a-120-n-10","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"selector":".modal-content-wrapper","selectorGuids":["1870f500-cead-3904-2e3a-f9dcddfdb8c2"]},"value":1,"unit":""}},{"id":"a-120-n-9","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"ease","duration":300,"target":{"selector":".modal-content-wrapper","selectorGuids":["1870f500-cead-3904-2e3a-f9dcddfdb8c2"]},"xValue":1,"yValue":1,"zValue":1,"locked":true}}]}],"useFirstGroupAsInitialState":true,"createdOn":1683300132020}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function ModalV2({
  as: _Component = _Builtin.Block,
  modalTriggerSlot,
  modalContentSlot,
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      id={_utils.cx(
        _styles,
        "w-node-cb4ad8db-05b6-b3e7-a766-c6040a962371-0a962371"
      )}
      tag="div"
    >
      <_Builtin.Block
        data-w-id="cb4ad8db-05b6-b3e7-a766-c6040a962372"
        tag="div"
      >
        {modalTriggerSlot ?? <ButtonSecondary text="Launch modal v2" />}
      </_Builtin.Block>
      <_Builtin.Block className={_utils.cx(_styles, "modal-wrapper")} tag="div">
        <_Builtin.Block
          className={_utils.cx(_styles, "modal-content-wrapper")}
          tag="div"
        >
          {modalContentSlot ?? <ModalCardV2 />}
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "modal-close-overlay")}
          data-w-id="cb4ad8db-05b6-b3e7-a766-c6040a962377"
          tag="div"
        />
      </_Builtin.Block>
    </_Component>
  );
}
