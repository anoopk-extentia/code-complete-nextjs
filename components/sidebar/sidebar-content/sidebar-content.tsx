import Image from 'next/image';
import { FC } from 'react';
import { ISidebarContentProps } from '../sidebar-content/sidebar-content.interface';
import SidebarItem from '../sidebar-item/sidebar-item';
import { navbarData } from 'utils/navbar-data';

const SidebarContent: FC<ISidebarContentProps> = ({ setActiveItem, activeItem }): JSX.Element => {
    return (
        <div className="py-4 pt-0 text-gray-700 dark:text-gray-400">
            <ul className="mt-10 md:mt-0">
                <li className="relative hidden w-48 h-14 md:block">
                    <Image src="/static/images/header.png" layout="fill" alt="header-image" />
                </li>
                {navbarData.map((item) => (
                    <SidebarItem
                        key={item.name}
                        {...item}
                        activeItem={activeItem}
                        setActiveItem={setActiveItem}
                    />
                ))}
            </ul>
        </div>
    );
};

export default SidebarContent;
