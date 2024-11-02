import React from 'react';
import { useEffect } from 'react';
import './App.css';
import Contacts from './components/Contacts';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Training from './components/Training';
import Aos from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(()=>{
    Aos.init();

  },[])
  return (
    <div>
     <Navbar/>
     <div className='container'>
     <Home/>
     <Training/>
     <Skills/>
     <Projects/>
     <Contacts/>
     </div>
     
    </div>
  );
}

export default App;
