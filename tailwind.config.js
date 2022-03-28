module.exports = {
    content: ['./pages/**/*.tsx', './components/**/*.tsx', '**/*/*.svg'],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        fontFamily: {
            kaushan: ['Kaushan Script'],
        },
        extend: {
            colors: {
                dark: {
                    default: '#1e1e1e',
                    sidebar: '#101010',
                    header: '#252525',
                },
                default: {
                    100: '#FDFDFD',
                },
                orange: {
                    default: '#FD5B1F',
                },
                blue: {
                    default: '#2a3f84',
                },
                background: {
                    light: '#E5E5E5',
                    dark: '#1e1e1e',
                },
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};

// ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}']
