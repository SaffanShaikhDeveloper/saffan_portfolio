import React from "react";
import { myProjects } from "../constants";
import Project from "../components/Project";

const Projects = () => {
  return (
    <section className="relative c-space section-spacing">
      {/* the below div is for small line  */}
      <h2 className="text-heading">My Selected Projects</h2>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full" />
      {myProjects.map((project) => (
        <Project key={project.id} {...project} />
      ))}
    </section>
  );
};

export default Projects;
