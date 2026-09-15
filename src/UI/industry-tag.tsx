import React from "react";

export default function IndustryTag({ industry }: { industry: string }) {
  return (
    <>
      <span className="text-brand-accent bg-brand-accent/10 rounded-lg px-2 py-1 text-xs font-bold">
        {industry}
      </span>
    </>
  );
}
