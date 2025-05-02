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
            <div className="leading-[1.2]">
                {language.language} : {language.level}
            </div>
        );
    };

    return (
        <div>
            <div className="content-center text-lg font-semibold pt-6 pb-2">
                <FontAwesomeIcon icon={faEarListen} className="text-xs align-[0.1em] pr-1" />
                <span>LANGUAGES</span>
            </div>
            {props.languages.map((language: Language) => renderLanguageSection(language))}
        </div>
    );
};
