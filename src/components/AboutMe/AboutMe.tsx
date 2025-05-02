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
    return (
        <div className="container">
            <AboutMeHeader name={props.data.basicDetails.fullName} />
            <div className="content-center flex flex-wrap pt-4 pb-4">
                <div className="basis-1/4 p-1 min-w-[320px] grow pb-4">
                    <ContactDetails userData={props.data.basicDetails} />
                </div>
                <div className="basis-2/4 p-1 min-w-[320px] grow pb-4">
                    <AboutMeDescriptionDetails details={props.data.aboutMe.descriptions} />
                </div>
                <div className="basis-1/4 p-1 min-w-[320px] grow pb-4">
                    <InterestDetails userData={props.data.basicDetails} />
                    <LanguageDetails languages={props.data.languages} />
                </div>
            </div>

            <div className="main">
                <AboutMeEmploymentDetails details={props.data.employmentDetails} />

                <CertificateDetails details={props.data.certificates} />

                <EducationDetails details={props.data.education} />
            </div>
        </div>
    );
};
