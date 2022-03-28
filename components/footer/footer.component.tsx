/**
 * FileName:footer.component.tsx
 * Description: This file contains app footer component.
 * Extentia: Copyright (c) 2022
 */

import { FC } from 'react';
import Image from 'next/image';

const FooterComponent: FC = (): JSX.Element => {
    return (
        <footer className="absolute bottom-0 z-10 flex items-center justify-between w-full h-16 px-8 text-white bg-blue-default dark:bg-dark-sidebar">
            <div className="text-xs">
                <span>Contact &#183;</span>
                <span> Privacy &#183;</span>
                <span> Statement &#183;</span>
                <span> Terms of use</span>
            </div>
            <div className="relative w-20 h-14">
                <Image src="/static/images/footer.png" alt="home-icon" layout="fill" />
            </div>
        </footer>
    );
};

export default FooterComponent;
