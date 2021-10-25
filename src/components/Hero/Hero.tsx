import cn from "classnames";
import React from "react";
import { Heading } from "..";
import { HeroProps } from "./Hero.props";
export const Hero = ({ ...props }: HeroProps): JSX.Element => {
  return (
    <>
      <div className={cn("wrapper")} {...props}>
        <Heading tag="h1">Andrey Tolstoy</Heading>
      </div>
    </>
  );
};
