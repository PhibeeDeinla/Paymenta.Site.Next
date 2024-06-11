import '@/assets/styles/global.scss'
import type { Metadata } from 'next'


export const metadata: Metadata = {
    title: 'DSSC Tech Site',
    description: 'Generated by create next app',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={`font-sans`}>{children}</body>
        </html>
    )
}
