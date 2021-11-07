import cn from "classnames";
import React from "react";
import { Heading, P } from "..";
import styles from "./Contact.module.scss";
import { ContactProps } from "./Contact.props";

export const Contact = ({ ...props }: ContactProps): JSX.Element => {
  return (
    <main className={cn("wrapper", styles.section)} {...props}>
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
            <div></div>
          </div>
        </div>
      </section>
    </main>
  );
};
