import React from "react";
import { LanguagesNav, Logo, Navigation } from "../../components";
import { sections } from "../../utils/App.config";
import { appLanguages } from "../../utils/Locale.config";
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

      {Object.keys(appLanguages).length > 1 && <LanguagesNav />}
    </header>
  );
};
