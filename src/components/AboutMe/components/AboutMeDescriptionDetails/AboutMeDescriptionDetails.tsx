import React from "react";

type AboutMeDescriptionDetailsProps = {
    details: string[];
};

export const AboutMeDescriptionDetails: React.FunctionComponent<AboutMeDescriptionDetailsProps> = (
    props: AboutMeDescriptionDetailsProps
) => {
    return (
        <div className="content-center text-s">
            {props.details.map(detail => (
                <div className="p-2 leading-[1.2]">{detail}</div>
            ))}
        </div>
    );
};
