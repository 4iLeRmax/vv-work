import clsx from "clsx";
import React from "react";

interface TagProps {
  children: React.ReactNode;
  firstColor: "accent" | "primary" | "secondary";
  secondColor?: "accent" | "primary" | "secondary";
}

export default function Tag({ children, firstColor, secondColor }: TagProps) {
  const borderClasses = {
    accent: "border-brand-accent",
    primary: "border-brand-primary",
    secondary: "border-brand-secondary",
  };

  const textClasses = {
    accent: "text-brand-accent",
    primary: "text-brand-primary",
    secondary: "text-brand-secondary",
  };

  const bgClasses = {
    accent: "bg-brand-accent/10", // 30% transparent accent background
    primary: "bg-brand-primary/10", // 30% transparent primary background
    secondary: "bg-brand-secondary/10", // 30% transparent secondary background
  };
  return (
    <>
      <div
        className={clsx(
          "text-sm font-bold p-4 py-1.5 rounded-3xl border text-center",
          borderClasses[firstColor],
          textClasses[firstColor],
          secondColor ? bgClasses[secondColor] : "",
        )}
      >
        {children}
      </div>
    </>
  );
}
