import React, { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer';

type Props = {
    children: ReactNode;
}

const layout = ({ children }: Props) => {
    return (
        <div className='flex flex-col h-screen justify-between bg-gray-200'>
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default layout