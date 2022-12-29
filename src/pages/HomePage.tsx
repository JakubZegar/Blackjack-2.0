import React from "react";

import { MenuButton } from "../components/general/Button";

import { routes } from "../const/routes";

export default function HomePage() {
  return (
    <>
      <MenuButton to={routes.game}>Game</MenuButton>
      <MenuButton to={routes.about}>About</MenuButton>
    </>
  );
}
