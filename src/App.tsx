import React from 'react';
import './App.css';
import { Header } from './components/Header'
import { Body } from './components/body'
import { Footer } from './components/Footer'

const App: React.FC = () => {

  return <>
  <div>
    <Header name='chavez' bio='software engineer'/>
  </div>

  <div>
    <Body />
  </div>

  <div>
    <Footer link1='https://github.com/spumdonut' 
    link2='https://www.linkedin.com/in/spumdonut/' 
    email='mailto:chavezworkmail@gmail.com'/>
  </div>
  </>
}

export default App;
