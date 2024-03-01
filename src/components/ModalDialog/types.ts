import { DialogHTMLAttributes, ReactNode } from 'react';
export type ModalSize = 'small' | 'medium';

export type ModalProps = {
  /** The size of the modal. */
  size?: ModalSize;
  /** The content of the modal, which can be React nodes or a string. */
  children?: ReactNode | string;
} & DialogHTMLAttributes<HTMLDialogElement>;
