import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { UserAboutMe } from "../../types/UserAboutMe";
import { faCertificate, faSchool } from "@fortawesome/free-solid-svg-icons";
import { AboutMeHeader } from "./components/AboutMeHeader/AboutMeHeader";
import { ContactDetails } from "./components/ContactDetails/ContactDetails";
import { InterestDetails } from "./components/InterestDetails/InterestDetails";
import { AboutMeDescriptionDetails } from "./components/AboutMeDescriptionDetails/AboutMeDescriptionDetails";
import { AboutMeEmploymentDetails } from "./components/AboutMeEmploymentDetails/AboutMeEmploymentDetails";

type AboutMeProps = {
    data: UserAboutMe;
};

const education = [
    ["2010", "Bachelor of Technical Translation"],
    ["2011", "Bachelor of Land Management and Cadastres"],
    ["2013", "Master of Land Management and Cadastres"]
];

const ListOfEducation = () => {
    return (
        <ul className="education_list">
            {education.map(([year, degree]) => (
                <li key={year} className="grey">
                    {year}, <span className="degree">{degree}</span>
                </li>
            ))}
        </ul>
    );
};

export const AboutMe: React.FunctionComponent<AboutMeProps> = (props: AboutMeProps) => {
    const LeftColumn = (): JSX.Element => {
        return <ContactDetails userData={props.data.basicDetails} />;
    };

    const RightColumn = (): JSX.Element => {
        return <InterestDetails userData={props.data.basicDetails} />;
    };

    return (
        <div className="container">
            <AboutMeHeader name={props.data.basicDetails.fullName} />
            <div className="columns">
                <LeftColumn />
                <RightColumn />
            </div>

            <div className="main">
                <AboutMeDescriptionDetails details={props.data.aboutMe.descriptions} />

                <AboutMeEmploymentDetails details={props.data.employmentDetails} />

                <div className="section_title education">
                    <FontAwesomeIcon icon={faCertificate} className="icon_profile" />
                    <div>CERTIFICATES</div>
                </div>

                <div className="job_title">
                    <div className="job_name">AWS Cloud Quest: Serverless Developer</div>
                    <div className="grey job_city">Issued Mar 2024</div>
                </div>
                <a
                    className="grey job_date"
                    href="https://www.credly.com/badges/e81cc81a-6033-4526-ac70-c0a0f9fd5a76/linked_in_profile">
                    show credentials
                </a>

                <div className="job_title">
                    <div className="job_name">AWS Cloud Quest: Solutions Architect</div>
                    <div className="grey job_city">Issued Feb 2024</div>
                </div>
                <a
                    className="grey job_date"
                    href="https://www.credly.com/badges/8ec27ea7-3fd9-446f-96b6-a841355f9d1d/linked_in_profile">
                    show credentials
                </a>

                <div className="job_title">
                    <div className="job_name">AWS Cloud Quest: Cloud Practitioner</div>
                    <div className="grey job_city">Issued Dec 2023</div>
                </div>
                <a
                    className="grey job_date"
                    href="https://www.credly.com/badges/5381a9b1-1029-4747-a3f2-361002492bfe/linked_in_profile">
                    show credentials
                </a>

                <div className="job_title">
                    <div className="job_name">Datadog 101: Developer</div>
                    <div className="grey job_city">Issued Feb 2024</div>
                </div>
                <a
                    className="grey job_date"
                    href="https://learn.datadoghq.com/certificates/mdj4xmnwcy">
                    show credentials
                </a>

                <div className="section_title education">
                    <FontAwesomeIcon icon={faSchool} className="icon_profile" />
                    <div>EDUCATION</div>
                </div>

                <div className="job_title">
                    <div className="job_name">Voronezh State Agricultural University</div>
                    <div className="grey job_city">Voronezh, Russia</div>
                </div>
                <ListOfEducation />
            </div>
        </div>
    );
};
