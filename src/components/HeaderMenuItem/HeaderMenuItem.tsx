import React from "react";
import clsx from "clsx";
import { MenuItem } from "../../types/MenuItem";

type HeaderMenuItemProps = {
    item: MenuItem;
};

export const HeaderMenuItem: React.FunctionComponent<HeaderMenuItemProps> = (
    props: HeaderMenuItemProps
) => {
    return (
        <a
            className={clsx(
                "rounded-md px-3 py-2 text-m font-medium cursor-pointer",
                props.item.isActive
                    ? "text-pink-600 bg-gray-100"
                    : "text-gray-400 hover:bg-gray-700 hover:text-white"
            )}
            onClick={props.item.onClick}>
            {props.item.name}
        </a>
    );
};
