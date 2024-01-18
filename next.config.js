/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'covers.openlibrary.org',
				port: '',
				pathname: '/b/id/**'
			},
			{
				protocol: 'https',
				hostname: 'islandpress.org',
				port: '',
				pathname: '/sites/default/files/**'
			},
			{
				protocol: 'https',
				hostname: 'avatars.githubusercontent.com',
				port: '',
				pathname: '/u/**'
			},
		]
	},
};

// eslint-disable-next-line no-undef
module.exports = nextConfig;