/**
 * FileName: sidebar-item.component.tsx
 * Description: This file contains sidebar item component.
 * Extentia: Copyright (c) 2022
 */

import { FC } from 'react';
import Link from 'next/link';
import { SvgIconComponent } from 'components';
import { ISidebarItemProps } from './sidebar-item.interface';

const SidebarItemComponent: FC<ISidebarItemProps> = ({
    path,
    iconName,
    name,
    activeItem,
    setActiveItem,
}) => {
    return (
        <li className="relative mt-10" key={name}>
            <Link href={path}>
                <a
                    onClick={() => setActiveItem(name)}
                    className={`flex items-center pr-8 focus:outline-none`}
                >
                    <span
                        className={`p-3 ml-4  ${
                            activeItem === name && 'rounded-md bg-orange-default/[0.1]'
                        }`}
                    >
                        <SvgIconComponent
                            className={`w-4 h-4 ${
                                activeItem === name
                                    ? 'text-orange-400'
                                    : 'text-black dark:text-white'
                            }`}
                            icon={iconName}
                        />
                    </span>
                    <span className="ml-4 text-xs tracking-wide truncate">{name}</span>
                </a>
            </Link>
        </li>
    );
};

export default SidebarItemComponent;
