import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCertificate } from "@fortawesome/free-solid-svg-icons";
import { Certificate } from "../../../../types/Certificate";

type CertificateDetailsProps = {
    details: Certificate[];
};

export const CertificateDetails: React.FunctionComponent<CertificateDetailsProps> = (
    props: CertificateDetailsProps
) => {
    const renderCertSection = (cert: Certificate): JSX.Element => {
        return (
            <React.Fragment>
                <div>
                    <a
                        className="text-gray-500 hover:text-gray-700"
                        href={cert.url}
                        target="_blank">
                        {cert.name}
                    </a>
                    <div className="text-stone-600">Issued & Valid: {cert.date}</div>
                </div>
            </React.Fragment>
        );
    };

    return (
        <div className="pr-4 pl-4">
            <div className="content-center text-lg font-semibold pt-6 pb-2">
                <FontAwesomeIcon icon={faCertificate} className="text-xs align-[0.1em] pr-2" />
                <span>CERTIFICATES</span>
            </div>
            {props.details.map((cert: Certificate) => renderCertSection(cert))}
        </div>
    );
};
