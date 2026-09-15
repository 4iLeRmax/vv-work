import React from "react";

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-20">
      {children}
    </div>
  );
}
