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
            {!isLoading && (
                <HomeLayout>
                    <div className="text-center text-m font-medium text-pink-600 flex h-screen">
                        <div className="m-auto">watch this space</div>
                    </div>
                </HomeLayout>
            )}
        </React.Fragment>
    );
};
