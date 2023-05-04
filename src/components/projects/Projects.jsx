import { SectionHeader } from "../utils/SectionHeader";
import { Project } from "./Project";
import styles from "./projects.module.scss";

export const Projects = ({projects}) => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="r" />
      
      <p className={styles.note}>Please note that due to the limitations of the free hosting service used, it might take up to 30 seconds to fully load the first time. I apologize for any inconvenience this may cause and appreciate your patience. Thank you!</p>
      <div className={styles.projects}>
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

