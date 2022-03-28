/**
 * FileName:header.component.tsx
 * Description: This file contains app header component.
 * Extentia: Copyright (c) 2022
 */

import Image from 'next/image';
import { FC } from 'react';
import { DarkModeToggleComponent, SvgIconComponent } from 'components';
import { IHeaderComponent } from './header.interface';
import { DropDownComponent } from 'components';

const HeaderComponent: FC<IHeaderComponent> = ({ handleIsSidebarOpen }): JSX.Element => {
    return (
        <header className="bg-white shadow-md lg:shadow-none shadow-bottom dark:bg-black h-[60px] py-4 px-10 dark:text-white flex items-center justify-between">
            <div>
                <button
                    type="button"
                    onClick={handleIsSidebarOpen}
                    className="md:hidden focus:outline-none"
                    aria-label="Menu"
                >
                    <SvgIconComponent className="w-6 h-6" icon="MenuIcon" />
                </button>
            </div>

            <ul className="flex items-center justify-end">
                <li className="items-center hidden mr-16 text-sm lg:flex">
                    <div className="flex items-center h-7 p-4 border-r-2 border-[#EEEEE]">
                        <DropDownComponent label="Disease Group" />
                    </div>
                    <div className="flex items-center h-7 p-4 border-r-2 border-[#EEEEE]">
                        <DropDownComponent label="Therapy area" />
                    </div>
                    <div className="flex items-center h-7 p-4 border-r-2 border-[#EEEEE]">
                        <DropDownComponent label="Location" />
                    </div>
                </li>
                <li className="mx-2 md:mx-0">
                    <DarkModeToggleComponent />
                </li>
                <li className="items-center hidden mx-3 text-xs md:flex">
                    <span>
                        Hi, <span className="font-semibold">Kevin Smith</span>
                    </span>
                </li>
                <li className="relative flex w-8 h-8">
                    <Image
                        className="w-full h-full mx-auto rounded-md"
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                        alt="profile woman"
                        layout="fill"
                    />
                </li>
            </ul>
        </header>
    );
};

export default HeaderComponent;
