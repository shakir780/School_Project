import React from 'react'
import SideMenu from './SidebarNav/SideBarNav'
import HomePage from './HomePage/HomePage'
import Landing from './LandingPage.js/Landing'
import { AnimatePresence } from 'framer-motion';
import ChatBox from './ChatBox/ChatBox';
import Desktop from './Desktop/Desktop';
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
const App = () => {
  return (

    <Router>
    <div>
    <SideMenu />
    <AnimatePresence exitBeforeEnter>
    <ChatBox />
    <Routes>
    
        <Route path="/" element={<HomePage/>} />
        <Route path="/landing" element={<Landing/>} />
        <Route path="/Desktop" element={<Desktop/>} />
      
    
    
    </Routes>
    </AnimatePresence>
    
    </div>
            </Router>

  )
}

export default App