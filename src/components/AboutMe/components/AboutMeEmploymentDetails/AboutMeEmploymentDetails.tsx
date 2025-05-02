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
            <div className="pt-2 pb-2">
                <div className="flex justify-between text-pink-600">
                    <div className="text-left font-semibold">
                        {job.jobTitle} @{job.companyName}
                    </div>
                    <div className="text-sm">
                        <div className="text-stone-400 self-end-safe text-right">
                            {job.startDate}-{job.endDate === null ? "present" : job.endDate}
                        </div>
                        <div className="text-stone-400 text-right">{job.location}</div>
                    </div>
                </div>
                <div className="text-left">{job.companyDescription}</div>
                <div className="text-stone-500 pt-1 pb-1">
                    Technologies used: {job.technologies.map(tech => tech).join(", ")}
                </div>
                <ul className="text-left list-disc">
                    {job.descriptions.map((description, index) => (
                        <li key={index}>{description}</li>
                    ))}
                </ul>
            </div>
        );
    };

    return (
        <div className="max-w-[970px] p-2">
            <div className="content-center text-lg font-semibold">
                <FontAwesomeIcon icon={faBriefcase} className="text-xs align-[0.1em] pr-1" />{" "}
                <span>EMPLOYMENT HISTORY</span>
            </div>
            {props.details.map((job: EmploymentDetails) => renderJobSection(job))}
        </div>
    );
};
