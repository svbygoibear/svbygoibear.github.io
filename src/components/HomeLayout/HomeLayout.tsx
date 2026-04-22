import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { MenuItem } from "../../types/MenuItem";
import { HeaderMenu } from "../HeaderMenu/HeaderMenu";

import ResumeFile from "../../assets/resume.pdf";

type HomeLayoutProps = {
    children?: React.ReactNode;
};

export const HomeLayout: React.FunctionComponent<HomeLayoutProps> = (props: HomeLayoutProps) => {
    const navigate = useNavigate();
    const location = useLocation();

    const menuItems: MenuItem[] = [
        {
            icon: "",
            id: "1",
            name: "resume-me",
            onClick: () => {
                window.open(ResumeFile, "_blank");
            }
        },
        {
            icon: "",
            id: "2",
            name: "meeting-me",
            onClick: () => {
                window.open("https://calendly.com/simonevanbuuren/new-meeting", "_blank");
            }
        },
        {
            icon: "",
            id: "3",
            name: "blog",
            isActive: location.pathname.startsWith("/blog"),
            onClick: () => {
                navigate("/blog");
            }
        }
    ];

    return (
        <div className="flex flex-col h-screen">
            <header className="bg-gray-200 text-grey text-center">
                <HeaderMenu menuItems={menuItems} />
            </header>
            <main className="flex-1 overflow-y-auto bg-neutral-50 p-5">{props.children}</main>
            <footer className="py-3 bg-gray-200 text-center text-slate-500 text-m font-medium">
                hand crafted 😎{" "}
                <a
                    className="text-pink-600 hover:text-pink-400"
                    target="_blank"
                    href="https://github.com/svbygoibear">
                    svbygoibear
                </a>
            </footer>
        </div>
    );
};
