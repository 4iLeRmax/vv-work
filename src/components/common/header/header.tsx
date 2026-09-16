import React from "react";
import Logo from "../../../UI/Logo";
import Navigation from "./header-navigation";
import HeaderActions from "./header-actions";
import Container from "../../../UI/container";
import MobileMenu from "../mobile-menu";

export default function Header() {
  return (
    <header className="relative py-4 border border-bor-primary min-[768px]:py-5">
      <Container>
        <div className="flex items-center justify-between">
          <Logo />
          <Navigation />
          <div className="hidden min-[768px]:block">
            <HeaderActions />
          </div>
          <MobileMenu />
        </div>
      </Container>
    </header>
  );
}
