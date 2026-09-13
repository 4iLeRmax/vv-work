import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header>
        <nav>
          <Link to={"/"}>Home</Link>
          <Link to={"/partner"}>Partner</Link>
          <Link to={"/contacts"}>Contacts</Link>
        </nav>
      </header>
    </>
  );
}
