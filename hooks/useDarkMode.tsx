/**
 * Filename: useDarkMode.tsx
 * Description: This hook is used to handle light and dark mode of the app
 * Extentia: Copyright (c) 2022
 */

import { useEffect, useState } from 'react';

interface IUseDarkMode {
    colorTheme: 'light' | 'dark';
    setTheme: React.Dispatch<React.SetStateAction<string>>;
}

const useDarkMode = (): IUseDarkMode => {
    const [theme, setTheme] = useState(typeof window !== 'undefined' ? localStorage.theme : 'dark');
    const colorTheme = theme === 'dark' ? 'light' : 'dark';

    useEffect(() => {
        const root = window.document.documentElement;

        root.classList.remove(colorTheme);
        root.classList.add(theme);

        if (typeof window !== 'undefined') {
            localStorage.setItem('theme', theme);
        }
    }, [colorTheme, theme]);

    return { colorTheme, setTheme };
};

export default useDarkMode;
