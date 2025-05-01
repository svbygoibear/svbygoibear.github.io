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
                    <div>{cert.name}</div>
                    <div className="text-stone-600">Issued & Valid: {cert.date}</div>
                </div>
                <a className="text-stone-600" href={cert.url}>
                    show credentials
                </a>
            </React.Fragment>
        );
    };

    return (
        <div>
            <div className="content-center text-lg">
                <FontAwesomeIcon icon={faCertificate} className="text-xs" />
                <div>CERTIFICATES</div>
            </div>
            {props.details.map((cert: Certificate) => renderCertSection(cert))}
        </div>
    );
};
