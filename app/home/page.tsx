import { Metadata } from 'next';

// metadata是next中的关键词，固定
export const metadata: Metadata = {
    title: 'home'
}

const Page = ({}) => {

    return (
        <h1>Hello, Home page!</h1>
    );
}

export default Page;
