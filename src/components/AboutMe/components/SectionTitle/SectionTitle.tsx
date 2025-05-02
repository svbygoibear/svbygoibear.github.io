import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

type SectionTitleProps = {
    title: string;
};

export const SectionTitle: React.FunctionComponent<SectionTitleProps> = (
    props: SectionTitleProps
) => {
    return (
        <div className="content-center text-lg pb-2">
            <FontAwesomeIcon icon={faCircle} className="text-[7px] align-[0.4em] pr-1" />
            <span className="font-semibold">{props.title.toLocaleUpperCase()}</span>
            <FontAwesomeIcon icon={faCircle} className="text-[7px] align-[0.4em] pl-1" />
        </div>
    );
};
