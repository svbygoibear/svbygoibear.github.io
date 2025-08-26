import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrochip } from "@fortawesome/free-solid-svg-icons";
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
        <div className="pb-5">
            <div className="flex flex-col items-center pb-4">
                <AboutMeHeader name={props.data.basicDetails.fullName} />
            </div>
            <div className="content-center flex flex-wrap pt-4 pb-4">
                <div className="text-center lg:text-left basis-1/4 p-1 min-w-[320px] max-w-[340px] grow pb-4">
                    <ContactDetails userData={props.data.basicDetails} />
                </div>
                <div className="basis-2/4 p-1 min-w-[320px] max-w-[1000px] grow pb-4">
                    <AboutMeDescriptionDetails details={props.data.aboutMe.descriptions} />
                </div>
                <div className="text-center lg:text-right basis-1/4 p-1 min-w-[320px] max-w-[340px] grow pb-4">
                    <InterestDetails userData={props.data.basicDetails} />
                    <LanguageDetails languages={props.data.languages} />
                </div>
            </div>
            <div className="flex justify-center items-center">
                <AboutMeEmploymentDetails details={props.data.employmentDetails} />
            </div>
            <div className="flex justify-center content-between flex-wrap">
                <EducationDetails details={props.data.education} />
            </div>
            <div className="flex justify-center content-between flex-wrap pt-4 pb-8">
                <CertificateDetails details={props.data.certificates} />
            </div>
            <FontAwesomeIcon icon={faMicrochip} className="text-2xl animate-pulse pt-2" />
        </div>
    );
};
