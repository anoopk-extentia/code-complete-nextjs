export interface ISidebarItem {
    path: string;
    iconName: string;
    name: string;
    activeItem: string;
    setActiveItem: (val: string) => void;
}
