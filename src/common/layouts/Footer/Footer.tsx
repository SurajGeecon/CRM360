import React, { useEffect, useState } from 'react'
//import Logo from './Logo'
//import Menu from './Menu'
//import Search from './Search'

const Footer = () => {

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
        <div className='w-full flex justify-center'>
            <p>
                Powered by vtiger CRM - 7.5.0&nbsp;&nbsp;© 2004 - 2023&nbsp;&nbsp;
                <a href="//www.vtiger.com" target="_blank">Vtiger</a>&nbsp;|&nbsp;
                <a href="https://www.vtiger.com/privacy-policy" target="_blank">Privacy Policy</a>
            </p>
            {/* simple components with props */}
            {/*<Logo name={name} />*/}
            {/*<Menu />*/}
        </div>
    );
}

export default Footer