import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSchool } from "@fortawesome/free-solid-svg-icons";
import { Education } from "../../../../types/Education";

type EducationDetailsProps = {
    details: Education[];
};

export const EducationDetails: React.FunctionComponent<EducationDetailsProps> = (
    props: EducationDetailsProps
) => {
    const renderEducationSection = (ed: Education): JSX.Element => {
        return (
            <div className="pb-2 max-w-[1000px]">
                <li key={ed.degree} className="">
                    <span>
                        {ed.startDate}-{ed.endDate},{" "}
                        <span className="text-pink-600 ">{ed.degree}</span>
                    </span>
                    <div className="content-center text-s text-stone-600">
                        {ed.descriptions.map(line => (
                            <div className="leading-[1.2]">{line}</div>
                        ))}
                    </div>
                </li>
            </div>
        );
    };

    return (
        <div className="pr-4 pl-4">
            <div className="content-center text-lg font-semibold pt-6 pb-2">
                <FontAwesomeIcon icon={faSchool} className="text-xs align-[0.1em] pr-2" />
                <span>EDUCATION</span>
            </div>
            <ul>{props.details.map((ed: Education) => renderEducationSection(ed))}</ul>
        </div>
    );
};
