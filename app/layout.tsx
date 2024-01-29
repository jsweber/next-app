import { FC, ReactNode } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Template from "./template"

export const metadata: Metadata = {
    title: 'hijsweber.com',
    description: 'Next web'
};

export interface RootLayoutProps {
    children: ReactNode;
}

export default function RootLayout({
    children
}){
    const pathname = usePathname();

    console.log(pathname);

    return (
        <html lang="en">
            <body>
                <div id="app">
                    <aside>
                        <Link href="/home">home</Link>
                    </aside>
                    <div className="content">
                        <header>header</header>
                        <Template key="home">{children}</Template>
                    </div>
                </div>
            </body>
        </html>
    );
}
