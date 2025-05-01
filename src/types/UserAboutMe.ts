import { AboutMeDescriptions } from "./AboutMeDescriptions";
import { BasicAboutMeDetails } from "./BasicAboutMeDetails";
import { Certificate } from "./Certificate";
import { Education } from "./Education";
import { EmploymentDetails } from "./EmploymentDetails";
import { Language } from "./Language";

export type UserAboutMe = {
    basicDetails: BasicAboutMeDetails;
    aboutMe: AboutMeDescriptions;
    employmentDetails: EmploymentDetails[];
    languages: Language[];
    certificates: Certificate[];
    education: Education[];
};
