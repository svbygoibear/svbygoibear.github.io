import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin, faDev } from "@fortawesome/free-brands-svg-icons";
import { BasicAboutMeDetails } from "../../../../types/BasicAboutMeDetails";
import { SectionTitle } from "../SectionTitle/SectionTitle";

type ContactDetailsProps = {
    userData: BasicAboutMeDetails;
};

export const ContactDetails: React.FunctionComponent<ContactDetailsProps> = (
    props: ContactDetailsProps
) => {
    return (
        <div>
            <SectionTitle title="Contact Me" />
            <div>
                <div>
                    <FontAwesomeIcon icon={faHome} size="sm" />{" "}
                    <span className="text-gray-700 cursor-default">
                        {" "}
                        {props.userData.city}, {props.userData.country}
                    </span>
                </div>
                <div>
                    <FontAwesomeIcon icon={faMailBulk} size="sm" />{" "}
                    <span className="text-gray-700">{props.userData.email}</span>
                </div>
                <div>
                    <FontAwesomeIcon icon={faLinkedin} size="sm" />
                    <a
                        className="text-gray-500 hover:text-gray-700"
                        target="_blank"
                        href={props.userData.linkedInUrl.url}>
                        {" "}
                        {props.userData.linkedInUrl.name}
                    </a>
                </div>
                <div>
                    <FontAwesomeIcon icon={faGithub} size="sm" />
                    <a
                        className="text-gray-500 hover:text-gray-700"
                        target="_blank"
                        href={props.userData.githubUrl.url}>
                        {" "}
                        {props.userData.githubUrl.name}
                    </a>
                </div>
                <div>
                    <FontAwesomeIcon icon={faDev} size="sm" />
                    <a
                        className="text-gray-500 hover:text-gray-700"
                        target="_blank"
                        href={props.userData.devToUrl.url}>
                        {" "}
                        {props.userData.devToUrl.name}
                    </a>
                </div>
            </div>
        </div>
    );
};
