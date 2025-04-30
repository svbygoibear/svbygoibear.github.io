import React from "react";
import { MenuItem } from "../../types/MenuItem";
import { HeaderMenu } from "../HeaderMenu/HeaderMenu";

import ResumeFile from "../../assets/resume.pdf";

type HomeLayoutProps = {
    children?: React.ReactNode;
};

export const HomeLayout: React.FunctionComponent<HomeLayoutProps> = (props: HomeLayoutProps) => {
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
        }
    ];

    return (
        <div className="flex flex-col h-screen">
            <header className="py-5 bg-gray-200 text-grey text-center">
                <HeaderMenu menuItems={menuItems} />
            </header>
            <main className="flex-1 overflow-y-auto p-5">{props.children}</main>
            <footer className="py-5 bg-gray-200 text-center text-slate-500 text-m font-medium">
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
