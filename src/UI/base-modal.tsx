import React from "react";
import {
  DialogCloseButton,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogWrapper,
  RootDialog,
} from "./dialog";

interface ApplyModalProps {
  children: React.ReactNode;
  onClose: () => void;
}

export default function BaseModal({ children, onClose }: ApplyModalProps) {
  return (
    <>
      <RootDialog handleClose={onClose}>
        <DialogPortal>
          <DialogWrapper>
            <DialogOverlay handleClose={onClose} />
            <DialogContent>
              <DialogCloseButton handleClose={onClose} />
              {children}
            </DialogContent>
          </DialogWrapper>
        </DialogPortal>
      </RootDialog>
      ;
    </>
  );
}
