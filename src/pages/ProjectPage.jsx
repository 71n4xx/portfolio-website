import React, { useState } from "react";
import PageTitle from "../components/project/PageTitle";
import { projects } from "../data/data";
import ProjCard from "../components/projectSection/ProjCard";
import Footer from "../components/Footer";
import ProjectModal from "../components/modals/ProjectModal";
import { motion } from "framer-motion";
import { fadeIn, zoom } from "../framerMotion/variants";

const ProjectPage = () => {
  const projectList = Object.values(projects[0]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(null);

  const openModal = (project) => {
    console.log(`a proj card is clicked. project selected is: ${project}`);
    console.log(project);
    setSelectedProject(project);
    setShowModal(true);
  };
  const closeModal = () => {
    console.log(`a proj card is closed.`);
    setSelectedProject(null);
    setShowModal(false);
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center mb-36">
        <motion.div
          variants={zoom("in", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0 }}
          className="pt-44 w-full"
        >
          <PageTitle
            title={"Projects"}
            subtitle={"A little showcase of the various techs and fields I explored."}
          />
        </motion.div>
        <div className="max-w-[1500px] flex justify-center flex-wrap items-center gap-6 mt-14 lg:flex-row xl:flex-row 2xl:flex-row md:flex-col sm:flex-col">
          {projectList.map((project, index) => (
            <motion.div
              variants={zoom("out", 0.2 * (index))}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0 }}
              key={index}
            >
              <ProjCard
                clickFunc={() => {
                  openModal(project);
                }}
                thumbnail={project.thumbnail}
                title={project.title}
                subtitle={project.subtitle}
                techs={project.techs}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {showModal && selectedProject && (
        <ProjectModal
          isOpen={showModal}
          project={selectedProject}
          closeFunc={closeModal}
        />
      )}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default ProjectPage;
