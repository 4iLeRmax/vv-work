import React from "react";
import LoginButton from "../UI/login-button";

export default function HeaderActions() {
  return (
    <>
      <div className="flex items-center gap-4">
        <LoginButton />
      </div>
    </>
  );
}
