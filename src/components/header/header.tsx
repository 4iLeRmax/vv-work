import React from "react";
import Logo from "../UI/Logo";
import Navigation from "./header-navigation";
import HeaderActions from "./header-actions";

export default function Header() {
  return (
    <>
      <header className="px-20 py-5 border border-bor-primary">
        <div className="flex justify-between">
          <Logo />
          <Navigation />
          <HeaderActions />
        </div>
      </header>
    </>
  );
}
