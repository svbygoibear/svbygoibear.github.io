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
        <div className="left_column">
            <SectionTitle title="Contacts" />
            <div className="contacts">
                <div className="line_description">
                    <FontAwesomeIcon icon={faHome} size="sm" className="contact_icon" />
                    <span className="grey">
                        {props.userData.city}, {props.userData.country}
                    </span>
                </div>
                <div className="line_description">
                    <FontAwesomeIcon icon={faMailBulk} size="sm" className="contact_icon" />
                    <span className="grey">{props.userData.email}</span>
                </div>
                <div className="line_description">
                    <FontAwesomeIcon icon={faLinkedin} size="sm" className="contact_icon" />
                    <a className="grey" href={props.userData.linkedInUrl.url}>
                        {props.userData.linkedInUrl.name}
                    </a>
                </div>
                <div className="line_description">
                    <FontAwesomeIcon icon={faGithub} size="sm" className="contact_icon" />
                    <a className="grey" href={props.userData.githubUrl.url}>
                        {props.userData.githubUrl.name}
                    </a>
                </div>
                <div className="line_description">
                    <FontAwesomeIcon icon={faDev} size="sm" className="contact_icon" />
                    <a className="grey" href={props.userData.devToUrl.url}>
                        {props.userData.devToUrl.name}
                    </a>
                </div>
            </div>
        </div>
    );
};
