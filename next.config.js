/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ["wwsthemes.com", "hellojivan.com"],
	},
	env: {
		REACT_APP_BASE_URL: process.env.REACT_APP_BASE_URL,
	},
};

module.exports = nextConfig;
