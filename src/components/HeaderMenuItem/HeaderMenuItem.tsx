import React from "react";
import { MenuItem } from "../../types/MenuItem";

type HeaderMenuItemProps = {
    item: MenuItem;
};

export const HeaderMenuItem: React.FunctionComponent<HeaderMenuItemProps> = (
    props: HeaderMenuItemProps
) => {
    return (
        <a
            className="rounded-md px-3 py-2 text-m font-medium text-gray-400 hover:bg-gray-700 hover:text-white cursor-pointer"
            onClick={props.item.onClick}>
            {props.item.name}
        </a>
    );
};
