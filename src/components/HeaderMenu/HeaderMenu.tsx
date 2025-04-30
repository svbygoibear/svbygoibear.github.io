import React from "react";
import { MenuItem } from "../../types/MenuItem";

type HeaderMenuProps = {
    menuItems: MenuItem[];
};

export const HeaderMenu: React.FunctionComponent<HeaderMenuProps> = (props: HeaderMenuProps) => {
    const renderMenuItems = (): JSX.Element => {
        console.log("HeaderMenu props", props);
        return <React.Fragment>Test Items here</React.Fragment>;
    };
    return renderMenuItems();
};
