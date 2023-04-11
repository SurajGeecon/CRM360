import React from 'react'

// es6
// const Menu = () => {
//     return (
//         <div>Menu</div>
//     )
// }

// es5
// function Menu() {
//     return (
//         <div>Menu</div>
//     )
// }


import Link from 'next/link'

function Menu() {
    return (
        <ul>
            <li>
                <Link href="/home">Home</Link>
            </li>
            <li>
                <Link href="/about">About Us</Link>
            </li>
            {/* <li>
                <Link href="/blog/hello-world">Blog Post</Link>
            </li> */}
        </ul>
    )
}

export default Menu