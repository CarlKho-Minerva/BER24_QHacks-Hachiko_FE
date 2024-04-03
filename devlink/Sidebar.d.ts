import * as React from "react";
import * as Types from "./types";

declare function Sidebar(props: {
  as?: React.ElementType;
  buttonsLink?: Types.Basic.Link;
  inputsLink?: Types.Basic.Link;
  avatarsLink?: Types.Basic.Link;
  badgesLink?: Types.Basic.Link;
  tooltipsLink?: Types.Basic.Link;
  notificationsLink?: Types.Basic.Link;
  cardsLink?: Types.Basic.Link;
  tablesLink?: Types.Basic.Link;
  modalsLink?: Types.Basic.Link;
  tabsLink?: Types.Basic.Link;
  breadcrumbsLink?: Types.Basic.Link;
  emptyStatesLink?: Types.Basic.Link;
}): React.JSX.Element;
