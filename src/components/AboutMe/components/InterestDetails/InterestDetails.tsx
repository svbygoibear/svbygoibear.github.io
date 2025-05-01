import React from "react";
import { BasicAboutMeDetails } from "../../../../types/BasicAboutMeDetails";
import { SectionTitle } from "../SectionTitle/SectionTitle";

type InterestDetailsProps = {
    userData: BasicAboutMeDetails;
};

export const InterestDetails: React.FunctionComponent<InterestDetailsProps> = (
    props: InterestDetailsProps
) => {
    return (
        <div className="right_column">
            <SectionTitle title="Interests" />
            <div className="description">
                <div className="line_description">
                    {props.userData.interests.map(_ => _).join(", ")}
                </div>
            </div>
        </div>
    );
};
