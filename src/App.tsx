import React from "react";
import clsx from "clsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoadingAnimation } from "./components/LoadingAnimation/LoadingAnimation";
import { HomeLayout } from "./components/HomeLayout/HomeLayout";
import { AboutMe } from "./components/AboutMe/AboutMe";
import { BlogList } from "./pages/BlogList";
import { BlogPost } from "./pages/BlogPost";
import { UserAboutMe } from "./types/UserAboutMe";

import rawData from "./assets/data.json";

export const App: React.FunctionComponent = () => {
    const [isLoading, setIsLoading] = React.useState<boolean>(true);
    const [isFading, setIsFading] = React.useState<boolean>(false);
    const myData: UserAboutMe = rawData as UserAboutMe;

    React.useEffect(() => {
        const timer = setTimeout(() => {
            setIsFading(true);
            setTimeout(() => {
                setIsLoading(false);
            }, 500);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <BrowserRouter>
            <React.Fragment>
                <div
                    className={clsx(
                        "fixed inset-0 z-50 transition-opacity duration-500",
                        isFading ? "opacity-0" : "opacity-100"
                    )}
                    style={{ display: isLoading ? "block" : "none" }}>
                    <LoadingAnimation />
                </div>
                <div
                    className={clsx(
                        "transition-opacity duration-500",
                        isLoading ? "opacity-0" : "opacity-100"
                    )}>
                    <HomeLayout>
                        <Routes>
                            <Route
                                path="/"
                                element={
                                    <div className="text-center text-m font-medium text-grey-600 bg-neutral-50 flex h-screen">
                                        <div className="m-auto bg-neutral-50">
                                            <AboutMe data={myData} />
                                        </div>
                                    </div>
                                }
                            />
                            <Route path="/blog" element={<BlogList />} />
                            <Route path="/blog/:slug" element={<BlogPost />} />
                        </Routes>
                    </HomeLayout>
                </div>
            </React.Fragment>
        </BrowserRouter>
    );
};
