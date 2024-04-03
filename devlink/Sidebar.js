import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Sidebar.module.css";

export function Sidebar({
  as: _Component = _Builtin.Block,

  buttonsLink = {
    href: "https://dashflowtemplate.webflow.io/components#buttons",
  },

  inputsLink = {
    href: "https://dashflowtemplate.webflow.io/components#inputs",
  },

  avatarsLink = {
    href: "https://dashflowtemplate.webflow.io/components#avatars",
  },

  badgesLink = {
    href: "https://dashflowtemplate.webflow.io/components#badges",
  },

  tooltipsLink = {
    href: "https://dashflowtemplate.webflow.io/components#tooltips",
  },

  notificationsLink = {
    href: "https://dashflowtemplate.webflow.io/components#notifications",
  },

  cardsLink = {
    href: "https://dashflowtemplate.webflow.io/components#cards",
  },

  tablesLink = {
    href: "https://dashflowtemplate.webflow.io/components#tables",
  },

  modalsLink = {
    href: "https://dashflowtemplate.webflow.io/components#modals",
  },

  tabsLink = {
    href: "https://dashflowtemplate.webflow.io/components#tabs",
  },

  breadcrumbsLink = {
    href: "https://dashflowtemplate.webflow.io/components#breadcrumbs",
  },

  emptyStatesLink = {
    href: "https://dashflowtemplate.webflow.io/components#empty-states",
  },
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "sidebar-container")}
      id={_utils.cx(
        _styles,
        "w-node-_33df89bc-f82c-cc1e-d5c4-4959632564a9-632564a9"
      )}
      tag="div"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "text-50", "medium", "sidebar-title")}
        tag="div"
      >
        {"Start here"}
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(
          _styles,
          "grid-1-column",
          "sidebar-links-grid",
          "mg-bottom-48px"
        )}
        tag="div"
      >
        <_Builtin.Link
          className={_utils.cx(_styles, "sidebar-link")}
          button={false}
          block="inline"
          options={{
            href: "#",
          }}
        >
          <_Builtin.Image
            className={_utils.cx(_styles, "max-w-20px")}
            loading="eager"
            width="auto"
            height="auto"
            alt="Home - Dashflow X Webflow Template"
            src="https://uploads-ssl.webflow.com/660d670d57461f6bb915c687/660d670e57461f6bb915c891_home-sidebar-link-icon-dashflow-webflow-template.png"
          />
          <_Builtin.Block
            className={_utils.cx(_styles, "text-100", "medium")}
            tag="div"
          >
            {"Home"}
          </_Builtin.Block>
        </_Builtin.Link>
        <_Builtin.Link
          className={_utils.cx(_styles, "sidebar-link")}
          button={false}
          block="inline"
          options={{
            href: "#",
          }}
        >
          <_Builtin.Image
            className={_utils.cx(_styles, "max-w-20px")}
            loading="eager"
            width="auto"
            height="auto"
            alt="Changelog - Dashflow X Webflow Template"
            src="https://uploads-ssl.webflow.com/660d670d57461f6bb915c687/660d670e57461f6bb915c87f_changelog-sidebar-link-icon-dashflow-webflow-template.png"
          />
          <_Builtin.Block
            className={_utils.cx(_styles, "text-100", "medium")}
            tag="div"
          >
            {"Changelog"}
          </_Builtin.Block>
        </_Builtin.Link>
        <_Builtin.Link
          className={_utils.cx(_styles, "sidebar-link")}
          button={false}
          block="inline"
          options={{
            href: "#",
          }}
        >
          <_Builtin.Image
            className={_utils.cx(_styles, "max-w-20px")}
            loading="eager"
            width="auto"
            height="auto"
            alt="Licenses - Dashflow X Webflow Template"
            src="https://uploads-ssl.webflow.com/660d670d57461f6bb915c687/660d670e57461f6bb915c87b_licenses-sidebar-link-icon-dashflow-webflow-template.png"
          />
          <_Builtin.Block
            className={_utils.cx(_styles, "text-100", "medium")}
            tag="div"
          >
            {"Licenses"}
          </_Builtin.Block>
        </_Builtin.Link>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "text-50", "medium", "sidebar-title")}
        tag="div"
      >
        {"Components"}
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "grid-1-column", "sidebar-links-grid")}
        tag="div"
      >
        <_Builtin.Link
          className={_utils.cx(_styles, "sidebar-link")}
          button={false}
          block="inline"
          options={buttonsLink}
        >
          <_Builtin.Image
            className={_utils.cx(_styles, "max-w-20px")}
            loading="eager"
            width="auto"
            height="auto"
            alt="Buttons - Dashflow X Webflow Template"
            src="https://uploads-ssl.webflow.com/660d670d57461f6bb915c687/660d670e57461f6bb915c878_buttons-sidebar-link-icon-dashflow-webflow-template.png"
          />
          <_Builtin.Block
            className={_utils.cx(_styles, "text-100", "medium")}
            tag="div"
          >
            {"Buttons"}
          </_Builtin.Block>
        </_Builtin.Link>
        <_Builtin.Link
          className={_utils.cx(_styles, "sidebar-link")}
          button={false}
          block="inline"
          options={inputsLink}
        >
          <_Builtin.Image
            className={_utils.cx(_styles, "max-w-20px")}
            loading="eager"
            width="auto"
            height="auto"
            alt="Inputs - Dashflow X Webflow Template"
            src="https://uploads-ssl.webflow.com/660d670d57461f6bb915c687/660d670e57461f6bb915c87e_inputs-sidebar-link-icon-dashflow-webflow-template.png"
          />
          <_Builtin.Block
            className={_utils.cx(_styles, "text-100", "medium")}
            tag="div"
          >
            {"Inputs"}
          </_Builtin.Block>
        </_Builtin.Link>
        <_Builtin.Link
          className={_utils.cx(_styles, "sidebar-link")}
          button={false}
          block="inline"
          options={avatarsLink}
        >
          <_Builtin.Image
            className={_utils.cx(_styles, "max-w-20px")}
            loading="eager"
            width="auto"
            height="auto"
            alt="Avatars - Dashflow X Webflow Template"
            src="https://uploads-ssl.webflow.com/660d670d57461f6bb915c687/660d670e57461f6bb915c87d_avatars-sidebar-link-icon-dashflow-webflow-template.png"
          />
          <_Builtin.Block
            className={_utils.cx(_styles, "text-100", "medium")}
            tag="div"
          >
            {"Avatars"}
          </_Builtin.Block>
        </_Builtin.Link>
        <_Builtin.Link
          className={_utils.cx(_styles, "sidebar-link")}
          button={false}
          block="inline"
          options={badgesLink}
        >
          <_Builtin.Image
            className={_utils.cx(_styles, "max-w-20px")}
            loading="eager"
            width="auto"
            height="auto"
            alt="Badges - Dashflow X Webflow Template"
            src="https://uploads-ssl.webflow.com/660d670d57461f6bb915c687/660d670e57461f6bb915c88f_badges-sidebar-link-icon-dashflow-webflow-template.png"
          />
          <_Builtin.Block
            className={_utils.cx(_styles, "text-100", "medium")}
            tag="div"
          >
            {"Badges"}
          </_Builtin.Block>
        </_Builtin.Link>
        <_Builtin.Link
          className={_utils.cx(_styles, "sidebar-link")}
          button={false}
          block="inline"
          options={tooltipsLink}
        >
          <_Builtin.Image
            className={_utils.cx(_styles, "max-w-20px")}
            loading="eager"
            width="auto"
            height="auto"
            alt="Tooltips - Dashflow X Webflow Template"
            src="https://uploads-ssl.webflow.com/660d670d57461f6bb915c687/660d670e57461f6bb915c879_tooltips-sidebar-link-icon-dashflow-webflow-template.png"
          />
          <_Builtin.Block
            className={_utils.cx(_styles, "text-100", "medium")}
            tag="div"
          >
            {"Tooltips"}
          </_Builtin.Block>
        </_Builtin.Link>
        <_Builtin.Link
          className={_utils.cx(_styles, "sidebar-link")}
          button={false}
          block="inline"
          options={notificationsLink}
        >
          <_Builtin.Image
            className={_utils.cx(_styles, "max-w-20px")}
            loading="eager"
            width="auto"
            height="auto"
            alt="Notifications - Dashflow X Webflow Template"
            src="https://uploads-ssl.webflow.com/660d670d57461f6bb915c687/660d670e57461f6bb915c877_notifications-sidebar-link-icon-dashflow-webflow-template.png"
          />
          <_Builtin.Block
            className={_utils.cx(_styles, "text-100", "medium")}
            tag="div"
          >
            {"Notifications"}
          </_Builtin.Block>
        </_Builtin.Link>
        <_Builtin.Link
          className={_utils.cx(_styles, "sidebar-link")}
          button={false}
          block="inline"
          options={cardsLink}
        >
          <_Builtin.Image
            className={_utils.cx(_styles, "max-w-20px")}
            loading="eager"
            width="auto"
            height="auto"
            alt="Cards - Dashflow X Webflow Template"
            src="https://uploads-ssl.webflow.com/660d670d57461f6bb915c687/660d670e57461f6bb915c873_cards-sidebar-link-icon-dashflow-webflow-template.png"
          />
          <_Builtin.Block
            className={_utils.cx(_styles, "text-100", "medium")}
            tag="div"
          >
            {"Cards"}
          </_Builtin.Block>
        </_Builtin.Link>
        <_Builtin.Link
          className={_utils.cx(_styles, "sidebar-link")}
          button={false}
          block="inline"
          options={tablesLink}
        >
          <_Builtin.Image
            className={_utils.cx(_styles, "max-w-20px")}
            loading="eager"
            width="auto"
            height="auto"
            alt="Tables - Dashflow X Webflow Template"
            src="https://uploads-ssl.webflow.com/660d670d57461f6bb915c687/660d670e57461f6bb915c890_tables-sidebar-link-icon-dashflow-webflow-template.png"
          />
          <_Builtin.Block
            className={_utils.cx(_styles, "text-100", "medium")}
            tag="div"
          >
            {"Tables"}
          </_Builtin.Block>
        </_Builtin.Link>
        <_Builtin.Link
          className={_utils.cx(_styles, "sidebar-link")}
          button={false}
          block="inline"
          options={modalsLink}
        >
          <_Builtin.Image
            className={_utils.cx(_styles, "max-w-20px")}
            loading="eager"
            width="auto"
            height="auto"
            alt="Modals - Dashflow X Webflow Template"
            src="https://uploads-ssl.webflow.com/660d670d57461f6bb915c687/660d670e57461f6bb915c876_modals-sidebar-link-icon-dashflow-webflow-template.png"
          />
          <_Builtin.Block
            className={_utils.cx(_styles, "text-100", "medium")}
            tag="div"
          >
            {"Modals"}
          </_Builtin.Block>
        </_Builtin.Link>
        <_Builtin.Link
          className={_utils.cx(_styles, "sidebar-link")}
          button={false}
          block="inline"
          options={tabsLink}
        >
          <_Builtin.Image
            className={_utils.cx(_styles, "max-w-20px")}
            loading="eager"
            width="auto"
            height="auto"
            alt="Tabs - Dashflow X Webflow Template"
            src="https://uploads-ssl.webflow.com/660d670d57461f6bb915c687/660d670e57461f6bb915c874_tabs-sidebar-link-icon-dashflow-webflow-template.png"
          />
          <_Builtin.Block
            className={_utils.cx(_styles, "text-100", "medium")}
            tag="div"
          >
            {"Tabs"}
          </_Builtin.Block>
        </_Builtin.Link>
        <_Builtin.Link
          className={_utils.cx(_styles, "sidebar-link")}
          button={false}
          block="inline"
          options={breadcrumbsLink}
        >
          <_Builtin.Image
            className={_utils.cx(_styles, "max-w-20px")}
            loading="eager"
            width="auto"
            height="auto"
            alt="Breadcrumbs - Dashflow X Webflow Template"
            src="https://uploads-ssl.webflow.com/660d670d57461f6bb915c687/660d670e57461f6bb915c87a_breadcrumbs-sidebar-link-icon-dashflow-webflow-template.png"
          />
          <_Builtin.Block
            className={_utils.cx(_styles, "text-100", "medium")}
            tag="div"
          >
            {"Bread crumbs"}
          </_Builtin.Block>
        </_Builtin.Link>
        <_Builtin.Link
          className={_utils.cx(_styles, "sidebar-link")}
          button={false}
          block="inline"
          options={emptyStatesLink}
        >
          <_Builtin.Image
            className={_utils.cx(_styles, "max-w-20px")}
            loading="eager"
            width="auto"
            height="auto"
            alt="Empty States - Dashflow X Webflow Template"
            src="https://uploads-ssl.webflow.com/660d670d57461f6bb915c687/660d670e57461f6bb915c875_empty-states-sidebar-link-icon-dashflow-webflow-template.png"
          />
          <_Builtin.Block
            className={_utils.cx(_styles, "text-100", "medium")}
            tag="div"
          >
            {"Empty states"}
          </_Builtin.Block>
        </_Builtin.Link>
      </_Builtin.Block>
    </_Component>
  );
}
