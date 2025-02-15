import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	/* config options here */
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'www.gamersberg.com',
				pathname: '/_next/image',
			},
		],
	},
};

export default nextConfig;
