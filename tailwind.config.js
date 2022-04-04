module.exports = {
    content: ['./pages/**/*.tsx', './components/**/*.tsx', '**/*/*.svg'],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                lightmode: {
                    content: '#e5e5e5',
                },
                darkmode: {
                    sidebar: '#101010',
                    content: '#1e1e1e',
                },
                orange: {
                    default: '#FD5B1F',
                },
            },
        },
    },
    plugins: [],
};
