import React from "react";
import { MenuItem } from "../../types/MenuItem";

type HeaderMenuItemProps = {
    item: MenuItem;
};

export const HeaderMenuItem: React.FunctionComponent<HeaderMenuItemProps> = (
    props: HeaderMenuItemProps
) => {
    return (
        <div key={props.item.id}>
            <a onClick={props.item.onClick}>{props.item?.name}</a>
        </div>
    );
};
