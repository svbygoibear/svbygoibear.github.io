import React from "react";
import { UserAboutMe } from "../../types/UserAboutMe";
import { AboutMeHeader } from "./components/AboutMeHeader/AboutMeHeader";
import { ContactDetails } from "./components/ContactDetails/ContactDetails";
import { InterestDetails } from "./components/InterestDetails/InterestDetails";
import { AboutMeDescriptionDetails } from "./components/AboutMeDescriptionDetails/AboutMeDescriptionDetails";
import { AboutMeEmploymentDetails } from "./components/AboutMeEmploymentDetails/AboutMeEmploymentDetails";
import { CertificateDetails } from "./components/CertificatesDetails/CertificatesDetails";
import { EducationDetails } from "./components/EducationDetails/EducationDetails";
import { LanguageDetails } from "./components/LanguageDetails/LanguageDetails";

type AboutMeProps = {
    data: UserAboutMe;
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

                <CertificateDetails details={props.data.certificates} />

                <EducationDetails details={props.data.education} />

                <LanguageDetails languages={props.data.languages} />
            </div>
        </div>
    );
};
