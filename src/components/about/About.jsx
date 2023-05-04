import { MyLinks } from "../nav/components/MyLinks";
import { Reveal } from "../utils/Reveal";
import { SectionHeader } from "../utils/SectionHeader";
import styles from "./about.module.scss";
import { Stats } from "./Stats";
import { AiOutlineArrowRight } from "react-icons/ai";

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" dir="l" />
      <div className={styles.about}>
        <div>
          <Reveal>
            <p className={`${styles.aboutText} ${styles.highlightFirstLetter}`}>
            Hi, I'm Abubakr Farah, a full stack developer with a B.Sc in Electronics Engineering. I have a passion for coding and a drive to constantly improve, making me a valuable asset in the field. I am skilled in all key programming languages and able to code and deploy projects efficiently. My diverse background sets me apart and I am always seeking new challenges to grow my skills.
            </p>
          </Reveal>
          <Stats />
          <Reveal>
            <div className={styles.links}>
              <div className={styles.linksText}>
                <span>My links</span>
                <AiOutlineArrowRight />
              </div>
              <MyLinks />
            </div>
          </Reveal>
        </div>
        
      </div>
    </section>
  );
};
