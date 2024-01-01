import { FC, ReactNode } from 'react';

export interface RootLayoutProps {
    children: ReactNode;
}

export default function RootLayout({
    children
}){
    return (
        <html lang="en">
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Document</title>
            </head>
            <body>
                {children }
            </body>
        </html>
    );
}
