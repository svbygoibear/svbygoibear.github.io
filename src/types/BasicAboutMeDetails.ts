export type BasicAboutMeDetails = {
    fullName: string;
    city: string;
    country: string;
    email: string;
    linkedInUrl: UrlKeyValuePair;
    githubUrl: UrlKeyValuePair;
    devToUrl: UrlKeyValuePair;
    interests: string[];
};

export type UrlKeyValuePair = {
    url: string;
    name: string;
};
