import { AboutMeDescriptions } from "./AboutMeDescriptions";
import { BasicAboutMeDetails } from "./BasicAboutMeDetails";

export type UserAboutMe = {
    basicDetails: BasicAboutMeDetails;
    aboutMe: AboutMeDescriptions;
};
