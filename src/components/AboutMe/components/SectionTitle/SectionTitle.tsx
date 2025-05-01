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
        <div className="section_title">
            <FontAwesomeIcon icon={faCircle} className="icon_circle" />
            <div>{props.title.toLocaleUpperCase()}</div>
            <FontAwesomeIcon icon={faCircle} className="icon_circle" />
        </div>
    );
};
