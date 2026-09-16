import React from "react";

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-[1440px] mx-auto px-4 min-[768px]:px-8 min-[1440px]:px-20">
      {children}
    </div>
  );
}
