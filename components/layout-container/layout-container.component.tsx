/**
 * Filename: layout-container.component.tsx\
 * Description: This file contains the common layout for every page.\
 * Extentia: Copyright (c) 2022
 */

import { FC, useState, useEffect } from 'react';
import { ILayoutContainerComponentProps } from './layout-container.interface';
import { HeaderComponent, SidebarComponent, FooterComponent } from 'components';

const LayoutContainerComponent: FC<ILayoutContainerComponentProps> = ({
    children,
}): JSX.Element => {
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    if (!mounted) return <div>loading...</div>;
    return (
        <>
            <HeaderComponent handleIsSidebarOpen={() => setIsSidebarOpen((prev) => !prev)} />
            <SidebarComponent isSidebarOpen={isSidebarOpen} />
            <div className="h-screen lg:left-[70px] lg:pl-[70px] top-16 overflow-x-hidden text-black dark:bg-darkmode-content bg-lightmode-content dark:text-white mb-16">
                {children}
            </div>
            <FooterComponent />
        </>
    );
};

export default LayoutContainerComponent;
