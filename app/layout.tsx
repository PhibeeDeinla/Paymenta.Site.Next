import '@/assets/styles/global.scss'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Paymenta Site',
    description: 'This is a site for Paymenta',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html
            lang="en"
            className="!scroll-smooth">
            <head>
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"
                />
            </head>
            <body className={`font-sans`}>{children}</body>
        </html>
    )
}
