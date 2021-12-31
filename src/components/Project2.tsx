import React from "react";
import { Icon } from '@iconify/react';
import Player from 'react-player';


interface Props {
    name: string,
    link: string,
}

const click = (
    event: React.MouseEvent<Element, MouseEvent>, 
    link: string, 
    text: string
    ) => {
    window.open(link)
    console.log(text)
}

export const Project2: React.FC<Props> = ( { name, link } ) => {

    const openGithubInNewWindow = (event: React.MouseEvent<Element, MouseEvent>) => {
        click(event, link, 'clicked git')
    }

    return (
        <div className='project--div--width'>
            <h5>{ name }</h5>
            <div className='player--wrap'>
            <Player 
            height='100%'
            width='100%'
            className='react--player' url="https://youtu.be/uGErkQ34kXk" />
            </div>
            <ul data-type='circle'>
                <li>a video game hosted on roblox.</li>
                <li>
                    players can purchase and equip pets, 
                    grow their character through clicking, 
                    fight in arena, and teleport to different worlds.
                </li>
            </ul>
            <small><p className='center--text'>tech:  lua</p></small>
            <div className='icon--container'>
            
            <Icon className='icon' icon="uit:github-alt" height="22" 
                onClick={ openGithubInNewWindow } />
            </div>
        </div>
    )
}