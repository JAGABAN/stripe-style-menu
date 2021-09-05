import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Sidebar from './components/Sidebar'
import Submenu from './components/Submenu'


function App() {
  return (
    <div className="App">
   <Navbar/>
   <Hero/>
   <Sidebar/>
   <Submenu/>
    </div>
  );
}

export default App;
