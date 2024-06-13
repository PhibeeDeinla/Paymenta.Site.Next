/** @type {import('next').NextConfig} */

import path from 'path'
const __dirname = path.resolve()

const nextConfig = {
    reactStrictMode: true,
    basePath: '/paymenta-nextjs',
    // distDir: 'build',
    experimental: {
        outputFileTracingRoot: path.join(__dirname, "../../"),
        esmExternals: false,
    },
    output: 'export',

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
