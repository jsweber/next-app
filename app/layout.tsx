import { FC, ReactNode } from 'react';
import Template from "./template"

export interface RootLayoutProps {
    children: ReactNode;
}

export default function RootLayout({
    children
}){
    return (
        <html lang="en">
            <body>
                <div>root layout</div>
                <Template key="home">{children}</Template>
            </body>
        </html>
    );
}
