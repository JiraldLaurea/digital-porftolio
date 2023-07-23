import React from "react";
import Wrapper from "./Wrapper";
import Image from "next/image";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
    return (
        <Wrapper id="projects" title="projects">
            <ProjectsCard
                imgSrc="projects_google-clone.png"
                name="Google Clone"
                description="A mobile-responsive website using Nextjs that allows
                users to search for terms and display the links of the
                results similar to Google Search"
                link="https://zandell-google-clone-2.vercel.app"
            />
            <ProjectsCard
                imgSrc="projects_airbnb-clone.png"
                name="Airbnb Clone"
                description="A mobile-responsive website using Nextjs that allows
                users to search for terms and display the links of the
                results similar to Google Search"
                link="https://zandell-airbnb-clone.vercel.app"
            />
        </Wrapper>
    );
};

export default Projects;
