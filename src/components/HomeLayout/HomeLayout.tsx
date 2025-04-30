import React from "react";
import { MenuItem } from "../../types/MenuItem";

type HomeLayoutProps = {
    children?: React.ReactNode;
    menuItems?: MenuItem[];
};

export const HomeLayout: React.FunctionComponent<HomeLayoutProps> = (props: HomeLayoutProps) => {
    return (
        <div className="flex flex-col h-screen">
            <header className="py-5 bg-gray-700 text-white text-center">
                Sticky Header and Footer with Tailwind
            </header>
            <main className="flex-1 overflow-y-auto p-5">{props.children}</main>
            <footer className="py-5 bg-gray-700 text-center text-white">
                Tailwind is Awesome 😎
            </footer>
        </div>
    );
};
