import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'CMS Editor',
    robots: {
        index: false,
        follow: false,
        googleBot: {
            index: false,
            follow: false,
        },
    },
}

export default function EditCMSLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}

