import React from 'react'

type Props = {
    name: string;
}

const Logo1 = ({ name }: Props) => {
    return (
        <div className="basis-1/4">{name}</div>
    )
}

export default Logo1