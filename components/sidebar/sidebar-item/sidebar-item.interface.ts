/**
 * Filename: sidebar-item.interface.ts\
 * Description: This is the interface file for the sidebar item component.\
 * Extentia: Copyright (c) 2022
 */

export interface ISidebarItemProps {
    path: string;
    iconName: string;
    name: string;
    activeItem: string;
    setActiveItem: (val: string) => void;
}
