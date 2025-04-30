import React from "react";
import { MenuItem } from "../../types/MenuItem";
import { HeaderMenu } from "../HeaderMenu/HeaderMenu";

type HomeLayoutProps = {
    children?: React.ReactNode;
    menuItems?: MenuItem[];
};

export const HomeLayout: React.FunctionComponent<HomeLayoutProps> = (props: HomeLayoutProps) => {
    const menuItems: MenuItem[] = [
        { icon: "", id: "1", name: "View Resume", onClick: () => {} },
        { icon: "", id: "2", name: "Schedule a Meeting", onClick: () => {} }
    ];

    return (
        <div className="flex flex-col h-screen">
            <header className="py-5 bg-gray-700 text-white text-center">
                <HeaderMenu menuItems={menuItems} />
            </header>
            <main className="flex-1 overflow-y-auto p-5">{props.children}</main>
            <footer className="py-5 bg-gray-700 text-center text-white">
                Tailwind is Awesome 😎
            </footer>
        </div>
    );
};
