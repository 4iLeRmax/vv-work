import React from "react";

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-20">
      {children}
    </div>
  );
}
