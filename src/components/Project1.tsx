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

export const Project1: React.FC<Props> = ( { name, link } ) => {

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
            className='react--player' url="https://youtu.be/Tzx0rTKFXq0" />
            </div>
            <ul data-type='circle'>
                <li>a full stack website to help 
                    me keep track of my finances.
                </li>
                <li>has user authentication and crud elements.</li>
            </ul>
            <small><p className='center--text'>tech:  
                javascript, react, node, mysql, express, bcrypt, bootstrap</p>
            </small>
            <div className='icon--container'>
                <Icon className='icon' icon="uit:github-alt" height="22" 
                onClick={ openGithubInNewWindow }/>
            </div>
        </div>
    )
}