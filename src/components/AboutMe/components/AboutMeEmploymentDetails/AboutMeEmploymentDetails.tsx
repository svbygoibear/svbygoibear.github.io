import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { EmploymentDetails } from "../../../../types/EmploymentDetails";

type AboutMeEmploymentDetailsProps = {
    details: EmploymentDetails[];
};

export const AboutMeEmploymentDetails: React.FunctionComponent<AboutMeEmploymentDetailsProps> = (
    props: AboutMeEmploymentDetailsProps
) => {
    console.log(props);
    const renderJobSection = (job: EmploymentDetails): JSX.Element => {
        return (
            <React.Fragment>
                <div className="job_title">
                    <div className="job_name">
                        {job.jobTitle} @{job.companyName}
                    </div>
                    <div className="grey job_city">{job.location}</div>
                </div>
                <div className="grey job_date">
                    {job.startDate}-{job.endDate === null ? "present" : job.endDate}
                </div>
                <div className="description">{job.companyDescription}</div>
                <div className="description">
                    Technologies used: {job.technologies.map(tech => tech).join(", ")}
                </div>
            </React.Fragment>
        );
    };

    return (
        <div>
            <div className="section_title education">
                <FontAwesomeIcon icon={faBriefcase} className="icon_profile" />
                <div>EMPLOYMENT HISTORY</div>
            </div>

            {props.details.map((job: EmploymentDetails) => renderJobSection(job))}

            {/* 
            <ul>
                <li>
                    Crafting scalable front-end solutions that improved system flexibility and
                    reliability.
                </li>
                <li>
                    Leading the development of UI components, ensuring a consistent user experience
                    and enhancing performance.
                </li>
                <li>
                    Building no-code forms for effective data handling, improving user interaction
                    and accuracy.
                </li>
                <li>
                    Implementing end-to-end testing to ensure the reliability of applications,
                    cutting down on issues after launch.
                </li>
                <li>
                    Aiding in managing serverless backend solutions on AWS, enhancing system
                    scalability and independence of maintenance.
                </li>
                <li>
                    Streamlining package management in a monorepo setup, boosting build efficiency,
                    and simplifying updates.
                </li>
                <li>
                    Integrating CSS modules to unify styling approaches, enhancing both performance
                    and developer ease of use.
                </li>
                <li>
                    Working closely with UX designers, product managers, and backend developers to
                    ensure seamless integration of front-end and back-end functionality.
                </li>
                <li>
                    Continuously optimizing web applications for speed and efficiency, improving
                    response times and user satisfaction.
                </li>
            </ul> */}
        </div>
    );
};
