import React, { useEffect, useState } from 'react'
//import Logo from './Logo1'.
import Logo from './Logo'
import Menu from './Menu'
import Search from './Search'

const Header = () => {

    // simple variable
    // const name = "imdeeps";

    // useState logic
    const [name, setName] = useState<string>("");

    // fat arrow function to get response
    const setUserName = () => {
        return "imdeepss";
    }

    // useEffect to handle re-render components
    useEffect(() => {
        setName(setUserName)
    }, [setUserName])

    return (
        <div className='w-full flex flex-row'>


            {/* simple components with props */}
            {/*<Logo name={name} />*/}
            <Logo />
            <Menu />
        </div>
    );
}

export default Header