/** @type {import('next').NextConfig} */

import path from 'path'
const __dirname = path.resolve()

const nextConfig = {
    output: "export",
    reactStrictMode: true,
    images: { unoptimized: true },
    
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        })

        return config
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'assets/styles')],
    },
}

export default nextConfig
