import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./Footer.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-2544":{"id":"e-2544","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-26","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2545"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"bdf375e4-f372-ad95-cceb-78bd47bb7448","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"bdf375e4-f372-ad95-cceb-78bd47bb7448","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":5,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1683590018535},"e-2546":{"id":"e-2546","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-28","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2547"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"bdf375e4-f372-ad95-cceb-78bd47bb744a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"bdf375e4-f372-ad95-cceb-78bd47bb744a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":5,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1683590030617},"e-2548":{"id":"e-2548","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-26","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2549"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"bdf375e4-f372-ad95-cceb-78bd47bb7454","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"bdf375e4-f372-ad95-cceb-78bd47bb7454","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1683590047713},"e-2550":{"id":"e-2550","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-28","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2551"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"bdf375e4-f372-ad95-cceb-78bd47bb745b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"bdf375e4-f372-ad95-cceb-78bd47bb745b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1683590059337}},"actionLists":{"a-26":{"id":"a-26","title":"👻 Fade In - 0.2s","actionItemGroups":[{"actionItems":[{"id":"a-26-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":true,"id":"660d670e57461f6bb915c7f5|f281aa50-9525-c3c5-6b9a-1ac0732007b7"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-26-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":200,"easing":"ease","duration":500,"target":{"useEventTarget":true,"id":"660d670e57461f6bb915c7f5|f281aa50-9525-c3c5-6b9a-1ac0732007b7"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1637118496510},"a-28":{"id":"a-28","title":"👻 Fade In - 0.4s","actionItemGroups":[{"actionItems":[{"id":"a-28-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":true,"id":"660d670e57461f6bb915c7f5|f281aa50-9525-c3c5-6b9a-1ac0732007b7"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-28-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":400,"easing":"ease","duration":500,"target":{"useEventTarget":true,"id":"660d670e57461f6bb915c7f5|f281aa50-9525-c3c5-6b9a-1ac0732007b7"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1637118496510}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Footer({ as: _Component = _Builtin.Section }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "bg-neutral-100")}
      grid={{
        type: "section",
      }}
      tag="div"
    >
      <_Builtin.Container
        className={_utils.cx(_styles, "container-default")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "grid-2-columns",
            "main-dashboard-grid"
          )}
          tag="div"
        >
          <_Builtin.Block
            id={_utils.cx(
              _styles,
              "w-node-bdf375e4-f372-ad95-cceb-78bd47bb7446-47bb7443"
            )}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "footer-top-section")}
              tag="div"
            >
              <_Builtin.Link
                className={_utils.cx(_styles, "logo-link-wrapper")}
                data-w-id="bdf375e4-f372-ad95-cceb-78bd47bb7448"
                button={false}
                block="inline"
                options={{
                  href: "#",
                }}
              >
                <_Builtin.Image
                  loading="eager"
                  width="auto"
                  height="auto"
                  alt="Dashflow X Webflow Template - Logo"
                  src="https://uploads-ssl.webflow.com/660d670d57461f6bb915c687/660d670e57461f6bb915c805_logo-dashflow-webflow-ecommerce-template.svg"
                />
              </_Builtin.Link>
              <_Builtin.Block
                className={_utils.cx(_styles, "footer-links-container")}
                data-w-id="bdf375e4-f372-ad95-cceb-78bd47bb744a"
                tag="div"
              >
                <_Builtin.Link
                  className={_utils.cx(_styles, "text-decoration-none")}
                  button={false}
                  block=""
                  options={{
                    href: "#",
                  }}
                >
                  {"Home"}
                </_Builtin.Link>
                <_Builtin.Link
                  className={_utils.cx(_styles, "text-decoration-none")}
                  button={false}
                  block=""
                  options={{
                    href: "#",
                  }}
                >
                  {"Changelog"}
                </_Builtin.Link>
                <_Builtin.Link
                  className={_utils.cx(_styles, "text-decoration-none")}
                  button={false}
                  block=""
                  options={{
                    href: "#",
                  }}
                >
                  {"Licenses"}
                </_Builtin.Link>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "footer-bottom-section")}
              tag="div"
            >
              <_Builtin.Block
                data-w-id="bdf375e4-f372-ad95-cceb-78bd47bb7454"
                tag="div"
              >
                {"Copyright © Dashflow X | Designed by "}
                <_Builtin.Link
                  className={_utils.cx(_styles, "text-bold")}
                  button={false}
                  block=""
                  options={{
                    href: "#",
                    target: "_blank",
                  }}
                >
                  {"BRIX Templates"}
                </_Builtin.Link>
                {" - Powered by "}
                <_Builtin.Link
                  className={_utils.cx(_styles, "text-bold")}
                  button={false}
                  block=""
                  options={{
                    href: "#",
                    target: "_blank",
                  }}
                >
                  {"Webflow"}
                </_Builtin.Link>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "social-links-container")}
                data-w-id="bdf375e4-f372-ad95-cceb-78bd47bb745b"
                tag="div"
              >
                <_Builtin.Link
                  className={_utils.cx(_styles, "social-circle-link")}
                  button={false}
                  block=""
                  options={{
                    href: "https://www.facebook.com/",
                    target: "_blank",
                  }}
                >
                  {""}
                </_Builtin.Link>
                <_Builtin.Link
                  className={_utils.cx(_styles, "social-circle-link")}
                  button={false}
                  block=""
                  options={{
                    href: "https://www.twitter.com/",
                    target: "_blank",
                  }}
                >
                  {""}
                </_Builtin.Link>
                <_Builtin.Link
                  className={_utils.cx(_styles, "social-circle-link")}
                  button={false}
                  block=""
                  options={{
                    href: "https://www.linkedin.com/",
                    target: "_blank",
                  }}
                >
                  {""}
                </_Builtin.Link>
                <_Builtin.Link
                  className={_utils.cx(_styles, "social-circle-link")}
                  button={false}
                  block=""
                  options={{
                    href: "https://www.youtube.com/",
                    target: "_blank",
                  }}
                >
                  {""}
                </_Builtin.Link>
                <_Builtin.Link
                  className={_utils.cx(_styles, "social-circle-link")}
                  button={false}
                  block=""
                  options={{
                    href: "https://dribbble.com/",
                    target: "_blank",
                  }}
                >
                  {""}
                </_Builtin.Link>
                <_Builtin.Link
                  className={_utils.cx(_styles, "social-circle-link")}
                  button={false}
                  block=""
                  options={{
                    href: "https://www.behance.net/",
                    target: "_blank",
                  }}
                >
                  {""}
                </_Builtin.Link>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Container>
    </_Component>
  );
}
