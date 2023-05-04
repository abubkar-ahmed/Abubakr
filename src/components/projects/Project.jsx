import { Reveal } from "../utils/Reveal";
import { useAnimation, useInView, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { AiFillGithub, AiOutlineExport } from "react-icons/ai";
import { ProjectModal } from "./ProjectModal";
import styles from "./projects.module.scss";

export const Project = ({
  description,
  url,
  shortDec,
  images,
  title,
  code,
  Lan,
}) => {
  const [hovered, setHovered] = useState(false);


  const [isOpen, setIsOpen] = useState(false);

  const controls = useAnimation();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  return (
    <>
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.75 }}
      >
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={() => setIsOpen(true)}
          className={styles.projectImage}
        >
          <img
            src={images[0]}
            alt={`An image of the ${title} project.`}
            style={{
              width: hovered ? "90%" : "85%",
              rotate: hovered ? "2deg" : "0deg",
            }}
          />
        </div>
        <div className={styles.projectCopy}>
          <Reveal width="100%">
            <div className={styles.projectTitle}>
              <h4>{title}</h4>
              <div className={styles.projectTitleLine} />


              <a href={url} target="_blank" rel="nofollow">
                <AiOutlineExport size="2.8rem" />
              </a>
            </div>
          </Reveal>
          <Reveal>
            <div className={styles.projectTech}>{Lan.join(" - ")}</div>
          </Reveal>
          <Reveal>
            <p className={styles.projectDescription}>
              {shortDec}{" "}
              <span onClick={() => setIsOpen(true)}>Learn more {">"}</span>
            </p>
          </Reveal>
        </div>
      </motion.div>
      
      <ProjectModal
        // modalContent={modalContent}
        description={description}
        projectLink={url}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        imgSrc={images}
        title={title}
        code={code}
        tech={Lan}
      />
    </>
  );
};