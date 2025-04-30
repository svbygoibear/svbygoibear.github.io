import React from "react";
import { MenuItem } from "../../types/MenuItem";
import { HeaderMenuItem } from "../HeaderMenuItem/HeaderMenuItem";

import LogoImage from "../../assets/cart.png";

type HeaderMenuProps = {
    menuItems: MenuItem[];
};

export const HeaderMenu: React.FunctionComponent<HeaderMenuProps> = (props: HeaderMenuProps) => {
    const renderMenuItems = (): JSX.Element => {
        console.log("HeaderMenu renderMenuItems", props);
        return (
            <nav>
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="flex shrink-0 items-center">
                                <img
                                    className="h-8 w-auto"
                                    src={LogoImage}
                                    alt="Nintendo Card Image"
                                />
                                <div className="px-3 py-2 text-m font-medium text-pink-600 cursor-default">
                                    want more info?
                                </div>
                            </div>
                            <div className="hidden sm:ml-6 sm:block">
                                <div className="flex space-x-4">
                                    {props.menuItems.map((item: MenuItem) => (
                                        <HeaderMenuItem key={item.id} item={item} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        );
    };
    return renderMenuItems();
};
