import { React, useState } from "react";
import ProjectDetails from "./ProjectDetails";

const Project = ({ title, description, subDescription, href, image, tags }) => {
  const [isHidden, setIsHidden] = useState(false);
  return (
    <>
      <div className="flex-wrap items-center py-10 justify-between space-y-14 sm:flex sm:space-y-0">
        <div>
          <p className="text-2xl">{title}</p>
          <div className="flex gap-5 mt-2 text-sand">
            {tags.map((tag) => (
              <span key={tag.id}>{tag.name}</span>
            ))}
          </div>
        </div>
        <button
          onClick={() => setIsHidden(true)}
          className="flex items-center gap-2 cursor-pointer hover-animation"
        >
          Read More
          <img src="assets/arrow-right.svg" alt="arrow" className="w-5" />
        </button>
      </div>
      {/* place a line after every project div */}
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
      {isHidden && (
        <ProjectDetails
          title={title}
          description={description}
          subDescription={subDescription}
          href={href}
          image={image}
          tags={tags}
          closeModel={() => setIsHidden(false)}
        />
      )}
    </>
  );
};

export default Project;
