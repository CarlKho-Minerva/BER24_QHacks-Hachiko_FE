import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./StatCardMedium.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-2362":{"id":"e-2362","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-117","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2363"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"f19763a7-a319-6fea-a8e7-c1e735b1a145","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"f19763a7-a319-6fea-a8e7-c1e735b1a145","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1683138060301},"e-2364":{"id":"e-2364","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-117","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2365"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"e857dcd5-f1b6-2479-f877-ea1f75bc80b4","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e857dcd5-f1b6-2479-f877-ea1f75bc80b4","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1683139732684},"e-2366":{"id":"e-2366","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-117","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2367"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"a365ed5f-fe2f-fe10-fd79-977dd89289a5","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"a365ed5f-fe2f-fe10-fd79-977dd89289a5","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1683139732878},"e-2368":{"id":"e-2368","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-117","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2369"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"4a267c2a-1cb0-432f-56e5-8ca7667bdd0d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"4a267c2a-1cb0-432f-56e5-8ca7667bdd0d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1683139733062}},"actionLists":{"a-117":{"id":"a-117","title":"❌ Notification Bar Close","actionItemGroups":[{"actionItems":[{"id":"a-117-n","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".close-icon-line.first","selectorGuids":["43830a82-8140-bf52-6814-43ad490536f0","54c1138f-dc60-b5c4-f85f-1bf2e805a168"]},"zValue":45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-117-n-2","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".close-icon-line.second","selectorGuids":["43830a82-8140-bf52-6814-43ad490536f0","81a609ff-f5ad-d001-138a-cf7232b05116"]},"zValue":-45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]},{"actionItems":[{"id":"a-117-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".close-icon-line.first","selectorGuids":["43830a82-8140-bf52-6814-43ad490536f0","54c1138f-dc60-b5c4-f85f-1bf2e805a168"]},"zValue":135,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-117-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":100,"easing":"","duration":200,"target":{"useEventTarget":true,"id":"f19763a7-a319-6fea-a8e7-c1e735b1a145"},"zValue":135,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-117-n-8","actionTypeId":"STYLE_OPACITY","config":{"delay":100,"easing":"ease","duration":200,"target":{"useEventTarget":"SIBLINGS","selector":".flex.align-start.gap-column-6px","selectorGuids":["186ee7c1-ff68-55ce-c9d6-4ee69aaf6d4f","72324608-05bc-32f5-0e66-b8a9dc0c6016","bd839ca8-087d-4219-81f5-7ae8bed3f106"]},"value":0,"unit":""}},{"id":"a-117-n-5","actionTypeId":"STYLE_SIZE","config":{"delay":300,"easing":"ease","duration":200,"target":{"useEventTarget":"PARENT","selector":".notification-bar","selectorGuids":["67319a63-66d9-2d7d-e89f-1c64d57604d7"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-117-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":300,"easing":"ease","duration":200,"target":{"useEventTarget":"PARENT","selector":".notification-bar","selectorGuids":["67319a63-66d9-2d7d-e89f-1c64d57604d7"]},"value":0,"unit":""}},{"id":"a-117-n-9","actionTypeId":"STYLE_SIZE","config":{"delay":300,"easing":"ease","duration":200,"target":{"useEventTarget":"PARENT","selector":".notification-bar-main-container","selectorGuids":["63ff3a20-87f8-2a47-5a0c-a32cd24d0bf3"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-117-n-10","actionTypeId":"STYLE_OPACITY","config":{"delay":300,"easing":"ease","duration":200,"target":{"useEventTarget":"PARENT","selector":".notification-bar-main-container","selectorGuids":["63ff3a20-87f8-2a47-5a0c-a32cd24d0bf3"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-117-n-11","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".notification-bar","selectorGuids":["67319a63-66d9-2d7d-e89f-1c64d57604d7"]},"value":"none"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1683138063046}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function StatCardMedium({
  as: _Component = _Builtin.Block,
  image = "",
  title = "Card title",
  amount = "50.88K",
  amountProps = {},
  greenDataVisibility = true,
  greenDataAmount = "24%",
  greenDataAmountProps = {},
  greenDataIconVisibility = true,
  redDataVisibility = false,
  redDataAmount = "24%",
  redDataAmountProps = {},
  redDataIconVisibility = true,
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component className={_utils.cx(_styles, "card", "pd-24px")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "flex", "align-start", "gap-column-12px")}
        tag="div"
      >
        <_Builtin.Image
          className={_utils.cx(_styles, "card-icon-square", "_26px")}
          loading="eager"
          width="auto"
          height="auto"
          alt=""
          src={image}
        />
        <_Builtin.Block tag="div">
          <_Builtin.Block
            className={_utils.cx(_styles, "text-50", "medium", "mg-bottom-4px")}
            tag="div"
          >
            {title}
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "_2-items-wrap-container",
              "amount-and-data"
            )}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "text-400",
                "bold",
                "color-neutral-800"
              )}
              tag="div"
              {...amountProps}
            >
              {amount}
            </_Builtin.Block>
            <_Builtin.Block tag="div">
              {greenDataVisibility ? (
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "card-amount-container",
                    "green"
                  )}
                  tag="div"
                >
                  <_Builtin.Block tag="div" {...greenDataAmountProps}>
                    {greenDataAmount}
                  </_Builtin.Block>
                  {greenDataIconVisibility ? (
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "dashflow-custom-icon",
                        "icon-size-8px"
                      )}
                      tag="div"
                    >
                      {""}
                    </_Builtin.Block>
                  ) : null}
                </_Builtin.Block>
              ) : null}
              {redDataVisibility ? (
                <_Builtin.Block
                  className={_utils.cx(_styles, "card-amount-container", "red")}
                  tag="div"
                >
                  <_Builtin.Block tag="div" {...redDataAmountProps}>
                    {redDataAmount}
                  </_Builtin.Block>
                  {redDataIconVisibility ? (
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "dashflow-custom-icon",
                        "icon-size-8px"
                      )}
                      tag="div"
                    >
                      {""}
                    </_Builtin.Block>
                  ) : null}
                </_Builtin.Block>
              ) : null}
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
