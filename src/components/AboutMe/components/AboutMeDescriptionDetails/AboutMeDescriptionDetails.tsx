import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserAlt } from "@fortawesome/free-solid-svg-icons";

type AboutMeDescriptionDetailsProps = {
    details: string[];
};

export const AboutMeDescriptionDetails: React.FunctionComponent<AboutMeDescriptionDetailsProps> = (
    props: AboutMeDescriptionDetailsProps
) => {
    return (
        <div>
            <div className="section_title">
                <FontAwesomeIcon icon={faUserAlt} className="icon_profile" />
                <div>ABOUT ME</div>
            </div>
            {props.details.map(detail => (
                <div className="description">{detail}</div>
            ))}
        </div>
    );
};
