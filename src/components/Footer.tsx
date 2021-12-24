import React from "react";
import { Icon } from '@iconify/react';
import '../App.css';

interface Props {
    link1: string,
    link2: string,
}

const click = (
    event: React.MouseEvent<Element, MouseEvent>, 
    link: string, 
    text: string
    ) => {
    window.open(link)
    console.log(text)
}

export const Footer: React.FC<Props> = ( { link1, link2 } ) => {

    return (
        <footer>
            <div className='center'>
                <Icon className='icon' 
                icon="ph:github-logo-thin" height="39" 
                onClick={(e: React.MouseEvent<Element, MouseEvent>) => {
                    click(e, link1, 'clicked github')
                }}/>
                <Icon className='icon' 
                icon="ph:linkedin-logo-thin" height="42" 
                onClick={(e: React.MouseEvent<Element, MouseEvent>) => {
                    click(e, link2, 'clicked linkedin')
                }}/>
            </div>
            <p>site by chavez</p>
        </footer>
    )
}