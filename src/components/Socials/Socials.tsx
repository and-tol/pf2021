import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { SocialsProps } from "./Socials.props";

export const Socials = ({ socials, ...props }: SocialsProps): JSX.Element => {
  return (
    <ul {...props}>
      {socials?.map((social) => {
        return (
          <li>
            <a href={social.path}>
              <FontAwesomeIcon icon={["fab", social.icon]} size="2x" />
            </a>
          </li>
        );
      })}
    </ul>
  );
};