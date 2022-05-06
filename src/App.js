import React from 'react'
import SideMenu from './SidebarNav/SideBarNav'
import HomePage from './HomePage/HomePage'
import Landing from './LandingPage.js/Landing'
import { AnimatePresence } from 'framer-motion';
import ChatBox from './ChatBox/ChatBox';
import Desktop from './Desktop/Desktop';
import Experience from './Experience/Experience';
import Admission from './Admission/Admission';
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Colleage from './Desktop/Colleage';
const App = () => {
  return (

    <Router>
    <div>
   
    <AnimatePresence exitBeforeEnter>
    <ChatBox />
    <Routes>
    
        <Route path="/" element={<HomePage/>} />
        <Route path="/landing" element={<Landing/>} />
        <Route path="/college" element={<Colleage/>} />
        <Route path="/Experience" element={<Experience/>} />
        <Route path="/Admission" element={<Admission/>} />
      
        
      
    
    
    </Routes>
    </AnimatePresence>
    
    </div>
            </Router>

  )
}

export default App