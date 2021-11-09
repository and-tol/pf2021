import cn from "classnames";
import React from "react";
import { Heading, P } from "..";
import styles from "./Contact.module.scss";
import { ContactProps } from "./Contact.props";

import { Socials } from "../Socials/Socials";
import { Form } from "../Form/Form";

export const Contact = ({
  socials,
  className,
  ...props
}: ContactProps): JSX.Element => {
  return (
    <main className={cn("wrapper", className)} {...props}>
      <Heading tag="h4" className="pb-1">
        Contact
      </Heading>
      <section className={styles.section}>
        <div className={styles.info}>
          <h3 className={styles.infoTitle}>Contact</h3>
          <P className={styles.infoText}>
            Want to know more or just chat?
            <br />
            You are welcome!
          </P>
        </div>
        <div className={styles.contacts}>
          <Form />
          <div>
            <h4>Follow</h4>
            <Socials socials={socials} />
          </div>
        </div>
      </section>
    </main>
  );
};
