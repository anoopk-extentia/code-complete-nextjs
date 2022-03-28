/**
 * FileName:dark-mode-toggle.component.tsx
 * Description: This file contains light and dark mode toggle.
 * Extentia: Copyright (c) 2022
 */

import { motion } from 'framer-motion';
import useDarkMode from 'hooks/useDarkMode';

const spring = {
    type: 'spring',
    stiffness: 700,
    damping: 30,
};

const DarkModeToggle = (): JSX.Element => {
    const { colorTheme, setTheme } = useDarkMode();
    return (
        <div
            className={`bg-gray-600 flex items-center px-0.5 rounded-full h-6 w-12 cursor-pointer flex-shrink-0 relative ${
                colorTheme === 'dark' ? 'justify-end' : 'justify-start'
            }`}
            onClick={() => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))}
        >
            <span className="absolute left-0">🌜</span>
            <motion.div className="z-40 w-5 h-5 bg-white rounded-full" layout transition={spring} />
            <span className="absolute right-0.5">🌞</span>
        </div>
    );
};

export default DarkModeToggle;
