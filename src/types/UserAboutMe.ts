import { AboutMeDescriptions } from "./AboutMeDescriptions";
import { BasicAboutMeDetails } from "./BasicAboutMeDetails";
import { EmploymentDetails } from "./EmploymentDetails";

export type UserAboutMe = {
    basicDetails: BasicAboutMeDetails;
    aboutMe: AboutMeDescriptions;
    employmentDetails: EmploymentDetails[];
};
