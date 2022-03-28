/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['images.unsplash.com', 'upload.wikimedia.org'],
    },
    env: {
        REACT_APP_BASE_URL: process.env.REACT_APP_BASE_URL,
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack', 'url-loader'],
        });

        return config;
    },
};

module.exports = nextConfig;
