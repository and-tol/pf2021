import Link from "next/link";
import React from "react";
import { LanguagesNav, Logo, Navigation } from "../../components";
import { appLanguages, sections } from "../../utils/AppConfig";
import { HeaderProps } from "./Header.props";

export const Header = ({
  className,
  isLogo,
  ...props
}: HeaderProps): JSX.Element => {
  return (
    <header {...props}>
      {isLogo && <Logo />}

      <Navigation />

      {appLanguages.length > 1 && <LanguagesNav />}
    </header>
  );
};
