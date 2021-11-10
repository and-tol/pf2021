import React from "react";
import { LanguagesNav } from "../../components";
import { appLanguages } from "../../utils/Locale.config";
import { HeaderProps } from "./Header.props";

export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
  console.log("className", className);
  return (
    <header className={className} {...props}>
      <div className="wrapper">
        {Object.keys(appLanguages).length > 1 && <LanguagesNav />}
      </div>
    </header>
  );
};
