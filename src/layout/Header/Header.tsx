import React from "react";
import { Hero, LanguagesNav, Logo, Navigation } from "../../components";
import { appLanguages } from "../../utils/Locale.config";
import { HeaderProps } from "./Header.props";

export const Header = ({
  className,
  isLogo,
  ...props
}: HeaderProps): JSX.Element => {
  return (
    <header className={"bg-primary"} {...props}>
      <Hero />

      <div className={"wrapper"}>
        {isLogo && <Logo />}

        <Navigation />

        {Object.keys(appLanguages).length > 1 && <LanguagesNav />}
      </div>
    </header>
  );
};
