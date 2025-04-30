import React from "react";
import { LoadingAnimation } from "./components/LoadingAnimation/LoadingAnimation";
import { HomeLayout } from "./components/HomeLayout/HomeLayout";

export const App: React.FunctionComponent = () => {
    const [isLoading, setIsLoading] = React.useState<boolean>(true);

    React.useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <React.Fragment>
            {isLoading && <LoadingAnimation />}
            {!isLoading && <HomeLayout />}
        </React.Fragment>
    );
};
