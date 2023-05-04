import { Reveal } from "../utils/Reveal";
import styles from "./stats.module.scss";
import { AiFillCode, AiFillSmile } from "react-icons/ai";

export const Stats = () => {
  return (
    <div className={styles.stats}>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillCode size="2.4rem" color="var(--brand)" />
            <span>Technologies I’ve been working with recently :</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">HTML5</span>
            <span className="chip">{`CSS3 & SCSS`}</span>
            <span className="chip">JavaScript</span>
            <span className="chip">TypeScript</span>
            <span className="chip">React JS</span>
            <span className="chip">{`Node & Express Js`}</span>
            <span className="chip">MongoDB</span>
            <span className="chip">MySQL</span>
            <span className="chip">Firebase</span>
            <span className="chip">MongoDB</span>
            <span className="chip">{`Git & Github`}</span>
            <span className="chip">Tailwind</span>
          </div>
        </div>
      </Reveal>
    </div>
  );
};