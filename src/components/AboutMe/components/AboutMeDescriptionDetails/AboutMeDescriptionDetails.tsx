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
            <div className="content-center text-lg">
                <FontAwesomeIcon icon={faUserAlt} className="text-xs" />
                <div>ABOUT ME</div>
            </div>
            {props.details.map(detail => (
                <div>{detail}</div>
            ))}
        </div>
    );
};
