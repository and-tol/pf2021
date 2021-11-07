import cn from "classnames";
import React from "react";
import { Heading, P } from "..";
// import styles from './Contact.module.scss';
import { ContactProps } from "./Contact.props";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faAdobe } from '@fortawesome/free-regular-svg-icons';

export const Contact = ({ ...props }: ContactProps): JSX.Element => {
  return (
    <main className={cn("wrapper")} {...props}>
      <Heading tag="h4" className="pb-1">
        Contact
      </Heading>
      <section>
        <div>
          <h3>Contact</h3>
          <p>
            Want to know more or just chat?
            <br />
            You are welcome!
          </p>
        </div>
        <div>
          <form name="form">
            <h4>Email</h4>
            <div>
              <label htmlFor="name">Your Name</label>
              <input id="name" type="text" name="name" required />
            </div>
            <div>
              <label htmlFor="subject">Subject</label>
              <input id="subject" type="text" name="subject" required />
            </div>
            <div>
              <label htmlFor="text">Subject</label>
              <textarea id="text" name="text" required></textarea>
            </div>
            <button type="submit" name="submit">
              Send Now
            </button>
          </form>
          <div>
            <h4>Follow</h4>
            <ul>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={["fab", "linkedin"]} size="2x" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};
