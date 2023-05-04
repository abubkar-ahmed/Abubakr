import { Reveal } from "../utils/Reveal";
import styles from "./contact.module.scss";
import { AiFillMail } from "react-icons/ai";

export const Contact = () => {
  return (
    <section className="section-wrapper" id="contact">
      <div className={styles.contactWrapper}>
        <Reveal width="100%">
          <h4 className={styles.contactTitle}>
            Contact<span>.</span>
          </h4>
        </Reveal>
        <Reveal width="100%">
          <p className={styles.contactCopy}>
            Shoot me an email if you want to connect! or give me a call at <a href="tel:+966533436019">+966533436019</a>. You can also find me on{" "}
            <a
              href="https://www.linkedin.com/in/abubakr-farah-579177211"
              target="_blank"
              rel="nofollow"
            >
              Linkedin
            </a>{" "}
            if that&apos;s more your speed.
          </p>
        </Reveal>
        <Reveal width="100%">
          <a href="mailto:abobkar96@gmail.com">
            <div className={styles.contactEmail}>
              <AiFillMail size="2.4rem" />
              <span>abobkar96@gmail.com</span>
            </div>
          </a>
        </Reveal>
      </div>
    </section>
  );
};
