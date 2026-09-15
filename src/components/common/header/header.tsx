import React from "react";
import Logo from "../../../UI/Logo";
import Navigation from "./header-navigation";
import HeaderActions from "./header-actions";
import Container from "../../../UI/container";

export default function Header() {
  return (
    <>
      <header className="py-5 border border-bor-primary">
        <Container>
          <div className="flex justify-between">
            <Logo />
            <Navigation />
            <HeaderActions />
          </div>
        </Container>
      </header>
    </>
  );
}
