export type MenuItem = {
    id: string;
    name: string;
    icon: string;
    onClick: () => void;
    children?: MenuItem[];
    isActive?: boolean;
    isOpen?: boolean;
};
