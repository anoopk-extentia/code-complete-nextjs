/**
 * Filename: header.component.tsx\
 * Description: This is the header component file.\
 * Extentia: Copyright (c) 2022
 */

import { FC } from 'react';
import Image from 'next/image';
import { DropDownComponent, SvgIconComponent, DarkModeToggleComponent } from 'components';

interface IHeaderComponentProps {
    handleIsSidebarOpen: () => void;
}
const HeaderComponent: FC<IHeaderComponentProps> = ({ handleIsSidebarOpen }): JSX.Element => {
    return (
        <header className="fixed top-0 left-0 z-[9999] w-full py-4 bg-white lg:z-10 dark:bg-darkmode-sidebar dark:text-white">
            <div className="flex items-center lg:hidden">
                <button
                    type="button"
                    // eslint-disable-next-line no-console
                    onClick={() => handleIsSidebarOpen()}
                    className="mx-4 focus:outline-none"
                    aria-label="Menu"
                >
                    <SvgIconComponent className="w-6 h-6 text-orange-default" icon="MenuIcon" />
                </button>
                <span className="text-lg font-normal">Lumineer</span>
            </div>
            <div className="items-center justify-end hidden lg:flex">
                <div>
                    <DarkModeToggleComponent />
                </div>
                <div className="p-4 border-r-2 border-[#EEEEE] h-[28px] flex items-center">
                    <DropDownComponent label="Disease Group" />
                </div>
                <div className="p-4 border-r-2 border-[#EEEEE]  h-[28px] flex items-center">
                    <DropDownComponent label="Therapy area" />
                </div>
                <div className="p-4 h-[28px] flex items-center">
                    <DropDownComponent label="Location" />
                </div>
                <div className="flex items-center mx-3 text-xs mr-[40px] ml-[60px]">
                    Hi, <span className="font-semibold">Kevin Smith</span>
                    <div className="relative w-8 h-8 ml-[10px]">
                        <Image
                            className="mx-auto rounded-md "
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                            alt="profile woman"
                            layout="fill"
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default HeaderComponent;
