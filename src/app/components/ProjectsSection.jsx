import React from "react";
import ProjectCard from "./ProjectCard";

const projectsData = [
    {
        id: 1,
        title: "All Windows and Doors website",
        description: "Partnered with All Windows in Doors to recreate website for their business. It is a fully responsive website.",
        image: "/images/projectimage1.png",
        tag: ["All", "Web"],
        gitUrl: "https://www.awdpllc.com/",
        previewUrl: "https://www.awdpllc.com/"

    },
    {
        id: 2,
        title: "Coming Soon...",
        description: "This is a project that is currently in development. Check back soon for updates.",
        image: "/images/projectimg2.jpg",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/"


    },

]
const ProjectsSection = () => {
    return (
        <div id="projects"> 
        <h2 className="text-cetner text-4xl font-bold text-whte mt-4 mb-8 md:mb-12">
            My Projects
        </h2>
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {projectsData.map((project) => 
            <ProjectCard 
            key={project.id} 
            title={project.title} 
            description={project.description} 
            imgUrl={project.image} 
            tags={project}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
            />)}</div>

        </div>
    );
};

export default ProjectsSection