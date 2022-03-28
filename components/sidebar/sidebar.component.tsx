/**
 * FileName:sidebar.component.tsx
 * Description: This file contains app sidebar component.
 * Extentia: Copyright (c) 2022
 */

import { FC, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { ISideBarComponent } from './sidebar.interface';
import { SidebarContent } from 'components';

const cls = {
    aside: (isSidebarOpen: boolean) =>
        `md:flex block md:absolute top-0 left-0 inset-y-0 left-0 z-30 md:w-[70px] w-full cursor-pointer md:hover:w-48 overflow-x-hidden overflow-y-scroll  h-[calc(100%-4rem)] transition duration-300 ease-out transform translate-x-0 md:translate-x-0 md:inset-0 bg-white dark:bg-dark-sidebar ${
            isSidebarOpen ? 'ease-out translate-x-0' : 'ease-in -translate-x-full'
        } `,
};

const SideBarComponent: FC<ISideBarComponent> = ({ isSidebarOpen }): JSX.Element => {
    const [activeItem, setActiveItem] = useState<string>('Home');
    const { pathname } = useRouter();

    useEffect(() => {
        if (pathname !== '/') {
            const active = pathname.slice(1).substring(1, 0).toUpperCase() + pathname.substring(2);
            setActiveItem(active);
        }
    }, [pathname]);

    return (
        <>
            <aside className={cls.aside(isSidebarOpen)}>
                <SidebarContent setActiveItem={setActiveItem} activeItem={activeItem} />
            </aside>
        </>
    );
};

export default SideBarComponent;
