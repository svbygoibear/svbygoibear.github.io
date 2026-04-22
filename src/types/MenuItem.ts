import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export type MenuItem = {
    id: string;
    name: string;
    icon: string;
    faIcon?: IconDefinition;
    onClick: () => void;
    children?: MenuItem[];
    isActive?: boolean;
    isOpen?: boolean;
};
