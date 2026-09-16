"use client";

import { X } from "lucide-react";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const RootDialog = ({
  children,
  handleClose,
}: {
  children: React.ReactNode;
  handleClose: () => void;
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleClose]);

  return children;
};

const DialogPortal = ({ children }: { children: React.ReactNode }) => {
  const modalsContainer = document.getElementById("modals");

  if (!modalsContainer) return null;

  return createPortal(children, modalsContainer);
};

const DialogWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="fixed top-0 left-0 z-30 w-full h-dvh flex items-center justify-center">
      {children}
    </div>
  );
};

const DialogOverlay = ({ handleClose }: { handleClose: () => void }) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!overlayRef.current || overlayRef.current.offsetWidth === 0) {
      return;
    }

    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    document.documentElement.style.overflow = "hidden";
    document.documentElement.style.paddingRight = `${scrollbarWidth}px`;

    return () => {
      document.documentElement.style.overflow = "";
      document.documentElement.style.paddingRight = "";
    };
  }, []);

  return (
    <>
      <div
        ref={overlayRef}
        className="fixed inset-0 bg-black/30 backdrop-blur-xs"
        onClick={handleClose}
      ></div>
    </>
  );
};

const DialogContent = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="relative">{children}</div>
    </>
  );
};

const DialogCloseButton = ({ handleClose }: { handleClose: () => void }) => {
  return (
    <>
      <button
        onClick={handleClose}
        className="absolute top-10 right-10 bg-primary border border-bor-primary text-brand-secondary rounded-md w-8 h-8 flex items-center justify-center transition-colors "
      >
        <X size={14} />
      </button>
    </>
  );
};

export {
  RootDialog,
  DialogWrapper,
  DialogPortal,
  DialogOverlay,
  DialogContent,
  DialogCloseButton,
};
