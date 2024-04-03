import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./LoadingBar.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-2282":{"id":"e-2282","name":"","animationType":"custom","eventTypeId":"PAGE_FINISH","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-113","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2281"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1679959322032}},"actionLists":{"a-113":{"id":"a-113","title":"⏲  Page Delay","actionItemGroups":[{"actionItems":[{"id":"a-113-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".page-wrapper","selectorGuids":["4734da84-8d22-8e4f-3f55-6485b64de28e"]},"value":0,"unit":""}},{"id":"a-113-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".loading-bar","selectorGuids":["00b6a48a-ab9f-b5c9-31e4-a23e3e9adecb"]},"widthValue":0,"widthUnit":"vw","heightUnit":"PX","locked":false}}]},{"actionItems":[{"id":"a-113-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":200,"easing":"","duration":0,"target":{"selector":".loading-bar-wrapper","selectorGuids":["1974fc57-b22c-6f62-3701-52eaf94a0bab"]},"value":"block"}},{"id":"a-113-n-4","actionTypeId":"STYLE_SIZE","config":{"delay":200,"easing":"outQuad","duration":700,"target":{"selector":".loading-bar","selectorGuids":["00b6a48a-ab9f-b5c9-31e4-a23e3e9adecb"]},"widthValue":100,"widthUnit":"vw","heightUnit":"PX","locked":false}},{"id":"a-113-n-5","actionTypeId":"STYLE_OPACITY","config":{"delay":200,"easing":"outQuad","duration":700,"target":{"selector":".page-wrapper","selectorGuids":["4734da84-8d22-8e4f-3f55-6485b64de28e"]},"value":1,"unit":""}},{"id":"a-113-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":900,"easing":"ease","duration":300,"target":{"selector":".loading-bar-wrapper","selectorGuids":["1974fc57-b22c-6f62-3701-52eaf94a0bab"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-113-n-7","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".loading-bar-wrapper","selectorGuids":["1974fc57-b22c-6f62-3701-52eaf94a0bab"]},"value":"none"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1679959327211}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function LoadingBar({ as: _Component = _Builtin.Block }) {
  _interactions.useInteractions(_interactionsData, _styles);
  return (
    <_Component className={_utils.cx(_styles, "loading-bar-wrapper")} tag="div">
      <_Builtin.Block className={_utils.cx(_styles, "loading-bar")} tag="div" />
    </_Component>
  );
}
