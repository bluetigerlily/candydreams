import React from 'react';
import './App.scss';

//components
import  Home  from './components/home/Home.js';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className='containerclass' id='containerid'>
      <div className='appnavbar'>
        <Navbar />
      </div>
      <div className="appbody">
      
        <Home />
      
      </div>
    </div>
  );
}

export default App;
