import React from "react";

export default function Perk({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-xs text-brand-secondary border border-bor-primary bg-white px-2 py-1 rounded-lg">
      {children}
    </span>
  );
}
