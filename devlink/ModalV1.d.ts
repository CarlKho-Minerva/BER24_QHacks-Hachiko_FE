import * as React from "react";
import * as Types from "./types";

declare function ModalV1(props: {
  as?: React.ElementType;
  modalTriggerSlot?: Types.Devlink.Slot;
  modalContentSlot?: Types.Devlink.Slot;
  buttonText?: React.ReactNode;
}): React.JSX.Element;
