import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { EmploymentDetails } from "../../../../types/EmploymentDetails";
import sybrin from "../../../../assets/companies/1_sybrin.png";
import fullfacing from "../../../../assets/companies/2_fullfacing.png";
import spandigital from "../../../../assets/companies/3_spandigital.png";
import qorusdocs from "../../../../assets/companies/4_qorusdocs.png";
import pleo from "../../../../assets/companies/5_pleo.png";
import nekohealth from "../../../../assets/companies/6_nekohealth.png";

const companyLogos: Record<string, string> = {
    "1_sybrin.png": sybrin,
    "2_fullfacing.png": fullfacing,
    "3_spandigital.png": spandigital,
    "4_qorusdocs.png": qorusdocs,
    "5_pleo.png": pleo,
    "6_nekohealth.png": nekohealth,
};

type AboutMeEmploymentDetailsProps = {
    details: EmploymentDetails[];
};

export const AboutMeEmploymentDetails: React.FunctionComponent<AboutMeEmploymentDetailsProps> = (
    props: AboutMeEmploymentDetailsProps
) => {
    const renderJobSection = (job: EmploymentDetails): JSX.Element => {
        return (
            <div className="pt-2 pb-6">
                <div className="flex justify-between text-pink-600">
                    <div className="text-left font-semibold flex items-center gap-1.5">
                        {job.companyLogo && companyLogos[job.companyLogo] && (
                            <img
                                src={companyLogos[job.companyLogo]}
                                alt={job.companyName}
                                className="h-5 w-auto"
                            />
                        )}
                        <span>{job.jobTitle} @{job.companyName}</span>
                    </div>
                    <div className="text-sm">
                        <div className="text-stone-400 self-end-safe text-right">
                            {job.startDate}-{job.endDate === null ? "present" : job.endDate}
                        </div>
                        <div className="text-stone-400 text-right">{job.location}</div>
                    </div>
                </div>
                <div className="text-left leading-[1.2]">{job.companyDescription}</div>
                <div className="text-stone-500 pt-1 pb-1">
                    Technologies used: {job.technologies.map(tech => tech).join(", ")}
                </div>
                <ul className="text-left list-disc leading-[1.2]">
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
