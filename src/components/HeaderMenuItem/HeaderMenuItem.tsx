import React from "react";
import { MenuItem } from "../../types/MenuItem";

type HeaderMenuItemProps = {
    item: MenuItem;
};

export const HeaderMenuItem: React.FunctionComponent<HeaderMenuItemProps> = (
    props: HeaderMenuItemProps
) => {
    const renderMenuItems = (): JSX.Element => {
        console.log("HeaderMenu props", props);
        return <React.Fragment>Test Items here</React.Fragment>;
    };
    return renderMenuItems();
};
