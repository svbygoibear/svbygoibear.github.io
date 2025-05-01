import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarListen } from "@fortawesome/free-solid-svg-icons";
import { Language } from "../../../../types/Language";

type LanguageDetailsProps = {
    languages: Language[];
};

export const LanguageDetails: React.FunctionComponent<LanguageDetailsProps> = (
    props: LanguageDetailsProps
) => {
    const renderLanguageSection = (language: Language): JSX.Element => {
        return (
            <div>
                {language.language} : {language.level}
            </div>
        );
    };

    return (
        <div>
            <div className="content-center text-lg">
                <FontAwesomeIcon icon={faEarListen} className="text-xs" />
                <div>Languages</div>
            </div>
            {props.languages.map((language: Language) => renderLanguageSection(language))}
        </div>
    );
};
