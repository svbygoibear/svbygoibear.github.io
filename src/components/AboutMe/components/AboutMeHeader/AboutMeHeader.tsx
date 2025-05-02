import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrochip } from "@fortawesome/free-solid-svg-icons";

type AboutMeHeaderProps = {
    name: string;
};

export const AboutMeHeader: React.FunctionComponent<AboutMeHeaderProps> = (
    props: AboutMeHeaderProps
) => {
    return (
        <div className="text-4xl">
            <div>{props.name.toLocaleUpperCase()}</div>
            <div>
                <FontAwesomeIcon icon={faMicrochip} className="text-2xl animate-pulse" />
            </div>
        </div>
    );
};
