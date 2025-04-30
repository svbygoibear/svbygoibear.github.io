import React from "react";
import { MenuItem } from "../../types/MenuItem";
import { HeaderMenuItem } from "../HeaderMenuItem/HeaderMenuItem";

type HeaderMenuProps = {
    menuItems: MenuItem[];
};

export const HeaderMenu: React.FunctionComponent<HeaderMenuProps> = (props: HeaderMenuProps) => {
    const renderMenuItems = (): JSX.Element => {
        return (
            <React.Fragment>
                {props.menuItems.map(menuItem => (
                    <HeaderMenuItem item={menuItem} />
                ))}
            </React.Fragment>
        );
    };
    return renderMenuItems();
};
