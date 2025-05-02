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
        <div className="pl-4">
            <SectionTitle title="Interests" />
            <div className="leading-[1.2]">
                <div>{props.userData.interests.map(_ => _).join(", ")}</div>
            </div>
        </div>
    );
};
