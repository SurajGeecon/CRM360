import Image from 'next/image'
import React from 'react'
import logo from "@public/logo.png"

const Logo = () => {
    return (
        <>
            <Image
                className='h-full'
                src={logo}
                alt="Crm360"
                width={150}
                height={38}
            />
        </>
    )
}

export default Logo