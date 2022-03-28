/**
 * FileName:sidebar-item.component.tsx
 * Description: This file contains app sidebar items.
 * Extentia: Copyright (c) 2022
 */

import { FC } from 'react';
import Link from 'next/link';
import { SvgIconComponent } from 'components';
import { ISidebarItem } from './siderbar-item-interface';

const SidebarItem: FC<ISidebarItem> = ({
    path,
    iconName,
    name,
    activeItem,
    setActiveItem,
}): JSX.Element => {
    return (
        <li className="relative mt-10">
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

export default SidebarItem;
