import React from "react";

interface Props {
    name: string,
    bio?: string,
}

export const Header: React.FC<Props> = ( { name, bio } ) => {
    
    return (
        <header className='clear' >
            <div className='inline float--left' >
                <p className='' >{ name }</p>
            </div>
            <div className='inline float--right' >
                <p className='' >{ bio }</p>
            </div>
        </header>
    )
}