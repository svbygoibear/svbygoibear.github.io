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
    const renderJobSection = (job: EmploymentDetails): JSX.Element => {
        return (
            <React.Fragment>
                <div className="text-pink-600">
                    <div>
                        {job.jobTitle} @{job.companyName}
                    </div>
                    <div className="text-stone-600">{job.location}</div>
                </div>
                <div className="text-stone-600">
                    {job.startDate}-{job.endDate === null ? "present" : job.endDate}
                </div>
                <div>{job.companyDescription}</div>
                <div>Technologies used: {job.technologies.map(tech => tech).join(", ")}</div>
                <ul>
                    {job.descriptions.map((description, index) => (
                        <li key={index}>{description}</li>
                    ))}
                </ul>
            </React.Fragment>
        );
    };

    return (
        <div className="max-w-[950px]">
            <div className="content-center text-lg font-semibold">
                <FontAwesomeIcon icon={faBriefcase} className="text-xs align-[0.1em]" />{" "}
                <span>EMPLOYMENT HISTORY</span>
            </div>
            {props.details.map((job: EmploymentDetails) => renderJobSection(job))}
        </div>
    );
};
