import React from "react";
import "./LoadingAnimation.css";

interface LoadingAnimationProperties {}

export const LoadingAnimation: React.FunctionComponent<LoadingAnimationProperties> = (
    props: LoadingAnimationProperties
) => {
    return <div className="loader" />;
};
