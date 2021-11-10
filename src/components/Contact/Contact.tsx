import cn from "classnames";
import React from "react";
import { Form, Heading, P, Socials } from "..";
import { ContactProps } from "./Contact.props";
import styles from "./Contact.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Contact = ({
  socials = [],
  ...props
}: ContactProps): JSX.Element => {
  console.log("socials >>>", socials);
  return (
    <section className={cn("wrapper", styles.pageContacts)} {...props}>
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
          <div className={styles.socialsContainer}>
            <h4 className={cn("formTitle", styles.socialsTitle)}>Follow</h4>
            {/* <Socials socials={socials} /> */}
            <ul className={styles.icons}>
              {socials?.map((social) => {
                return (
                  <li key={social._id} className={styles.icon}>
                    <a href={social.path}>
                      <FontAwesomeIcon icon={["fab", social.icon]} size="lg" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>
    </section>
  );
};
