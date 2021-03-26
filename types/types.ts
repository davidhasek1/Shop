import { ReactChild, MouseEventHandler } from "react";

export type ModalProps = {
  closeModal: MouseEventHandler;
  children: ReactChild;
};

export type handlers = {
  isProductDetailOpen: boolean,
}