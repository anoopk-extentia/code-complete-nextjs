/**
 * FileName: sidebar.component.tsx
 * Description: This file contains sidebar component.
 * Extentia: Copyright (c) 2022
 */

import { FC, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { sidebarData } from 'utils/sidebar-data';
import { SidebarItemComponent } from 'components';
import { ISidebarComponentProps } from './sidebar.interface';

const SidebarComponent: FC<ISidebarComponentProps> = ({ isSidebarOpen }): JSX.Element => {
    const [activeItem, setActiveItem] = useState<string>('Home');
    const { pathname } = useRouter();

    useEffect(() => {
        if (pathname !== '/') {
            const active = pathname.slice(1).substring(1, 0).toUpperCase() + pathname.substring(2);
            setActiveItem(active);
        }
    }, [pathname]);

    return (
        <aside
            className={`fixed top-0 left-0 h-screen lg:z-30 z-50 mt-14 lg:mt-0  bg-white overflow-x-hidden text-xs  pb-24 transition duration-300 ease-out transform translate-x-0 lg:translate-x-0 lg:inset-0 overflow-y-scroll cursor-pointer w-full dark:bg-darkmode-sidebar dark:text-white lg:w-[70px] hover:lg:w-48
						${isSidebarOpen ? 'ease-out translate-x-0' : 'ease-in -translate-x-full'}
						`}
        >
            <ul>
                <li className="sticky top-0 hidden w-48 h-16 lg:block">
                    <Image
                        src="/static/images/header.png"
                        layout="fill"
                        alt="header-image"
                        priority
                    />
                </li>
                {sidebarData.map((item) => (
                    <SidebarItemComponent
                        key={item.name}
                        {...item}
                        activeItem={activeItem}
                        setActiveItem={setActiveItem}
                    />
                ))}
            </ul>
        </aside>
    );
};

export default SidebarComponent;
