import { FC, ReactNode } from 'react';
import { Metadata } from 'next';

export interface PageProps {
    children: ReactNode
}
// metadata是next中的关键词，固定
export const metadata: Metadata = {
    title: 'home'
}

const Page: FC<PageProps> = () => {

    return (
        <h1>Hello, Home page!</h1>
    );
}

export default Page;
