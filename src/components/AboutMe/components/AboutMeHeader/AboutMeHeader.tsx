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
        <div className="text-4xl pt-1">
            <div>{props.name.toLocaleUpperCase()}</div>
            <div className="pt-2">
                <FontAwesomeIcon icon={faMicrochip} className="text-2xl animate-pulse" />
            </div>
        </div>
    );
};
