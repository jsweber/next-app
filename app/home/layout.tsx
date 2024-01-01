import { FC, ReactNode } from 'react';


export default function HomeLayout({
    children
}) {
    return (
        <section>
            <div>home layout</div>
            {children}
        </section>
    );
}
