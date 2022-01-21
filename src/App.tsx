import React from 'react';
import './App.css';
import { Header } from './components/Header'
import { Body } from './components/body'
import { Footer } from './components/Footer'

const App: React.FC = () => {

  return <>
  <div>
    <Header name='chavez' bio='programmer'/>
  </div>

  <div>
    <Body />
  </div>

  <div>
    <Footer link1='https://github.com/spumdonut' 
    link2='https://www.linkedin.com/in/smellycyborg/' 
    email='mailto:chavezworkmail@gmail.com'
    youtube='https://www.youtube.com/channel/UC2ljYS4OqG4F0-YMOrTkhVA'
    />
  </div>
  </>
}

export default App;
