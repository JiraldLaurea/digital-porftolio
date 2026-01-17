import { Timeline } from "primereact/timeline";
import { awsProjects, gsoProjects } from "../lib/projects";
import ExperienceCard from "./ExperienceCard";
import ExperienceJob from "./ExperienceJob";
import Wrapper from "./Wrapper";

const Experience = () => {
    return (
        <Wrapper
            id="experience"
            title="Experience"
            subtitle="My Professional Experience"
        >
            <ExperienceJob
                imgSrc="exp_aws.png"
                job="Assistant R&D Engineer"
                company="Advanced World Solutions, Inc."
                date="October 2023 - Present"
                isFirst
            />
            <div className="p-4 bg-white border-b border-x rounded-b-3xl sm:p-6 dark:bg-primary1-dark dark:border-zinc-700">
                <Timeline
                    value={awsProjects}
                    align="left"
                    marker={() => (
                        <div className="flex items-center justify-center w-4 h-4 border-2 rounded-full dark:border-zinc-700" />
                    )}
                    content={(item) => (
                        <ExperienceCard
                            project={item.project}
                            roles={item.roles}
                            date={item.date}
                            tasks={item.tasks}
                            techs={item.techs}
                        />
                    )}
                />
            </div>

            <ExperienceJob
                imgSrc="exp_gso.png"
                job="Fullstack Developer"
                company="General Services Office Iloilo"
                date="February 2023 - May 2023"
                hasNoBackground
            />
            <div className="p-4 bg-white border-b border-x rounded-b-3xl sm:p-6 dark:bg-primary1-dark dark:border-zinc-700">
                <Timeline
                    value={gsoProjects}
                    align="left"
                    marker={() => (
                        <div className="flex items-center justify-center w-4 h-4 border-2 rounded-full dark:border-zinc-700" />
                    )}
                    content={(item) => (
                        <ExperienceCard
                            project={item.project}
                            roles={item.roles}
                            date={item.date}
                            tasks={item.tasks}
                            techs={item.techs}
                        />
                    )}
                />
            </div>
        </Wrapper>
    );
};

export default Experience;
