import { Icon } from '@iconify/react';
import '../App.css';
interface Props {
    link1: string,
    link2: string,
    youtube: string,
    email: string
}

const clickOnIcon = (
    event: React.MouseEvent<Element, MouseEvent>, 
    link: string, 
    text: string
    ) => {
    window.open(link)
    console.log(text)
}

export const Footer: React.FC<Props> = ( { link1, link2, youtube, email } ) => {

    const openGithubInNewWindow = (event: React.MouseEvent<Element, MouseEvent>) => {
        clickOnIcon(event, link1, 'clicked github')
    }

    const openLinkedinInNewWindow = (event: React.MouseEvent<Element, MouseEvent>) => {
        clickOnIcon(event, link2, 'clicked linkedin')
    }

    const openEmail = (event: React.MouseEvent<Element, MouseEvent>) => {
        clickOnIcon(event, email, 'clicked email')
    }

    const openYoutube = (event: React.MouseEvent<Element, MouseEvent>) => {
        clickOnIcon(event, youtube, 'clicked email')
    }
    
    return (
        <footer>
            <div className='center'>
                <Icon className='icon' 
                icon="ph:github-logo-thin" height="39" 
                onClick={ openGithubInNewWindow }/>

                <Icon className='icon' 
                icon="ph:linkedin-logo-thin" height="42" 
                onClick={ openLinkedinInNewWindow }/>

                <Icon className='icon' 
                icon="ph:youtube-logo-thin" height="42" 
                onClick={ openYoutube }/>

                <Icon className='icon' 
                icon="emojione-monotone:e-mail" height="42"
                onClick={ openEmail }/>
            </div>
            <p>site by chavez</p>
        </footer>
    )
}