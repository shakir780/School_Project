import React from 'react'
import './Experience.css'
import {animate, motion,Override,useMotionValue,AnimatePresence} from "framer-motion"
import SideMenu from '../SidebarNav/SideBarNav';
import { Link } from 'react-router-dom';

const containerVariants={
  hidden:{
    opacity:0,
    x:'-100vw'
  },
  visible:{
    x:0,
    opacity:1,
    transition:{
      type:'tween',
      delay:0.0,
      duration:0.9
    
    },
  },
  exit:{
    x:'100vw',
    transition:{ease:'easeInOut'}
  }
}
const Experience = () => {
  return (
    <>
   <AnimatePresence>

  
    <motion.div 
    
        
    variants={ containerVariants }
    initial="hidden"
    animate="visible"
    exit="exit"
    
    className='experiecne__section'>
      <SideMenu/>
      <Link to="/">
    <div  className="title-container"
     initial={{y:-100,opacity:0,}}
     animate={{y:0,opacity:1}}
     transition={{delay:.2,duration:.5}}
    >
        
    <div className="title"

>
<h1>
Your
<br />
<span class="world">World </span>
<br />
Your
<br />
<span class="world">way</span>
</h1>
</div>
        </div>
        </Link>
<div className="experiencne__content__container">
<div className='expericne__title'>
    <h3>Please Choose Your destination</h3>
</div>

<div className="experience__destination__container">

<div className="expeiecne__butttons">
<motion.button  

initial={{x:100,opacity:0}}
animate={{x:0,opacity:1}}
transition={{delay:.3,duration:1.4, ease:'easeIn'}}
className="btn">
      <span > About ACU    </span>
      </motion.button>
      <Link to="/Admission">
      <motion.button  
       initial={{x:100,opacity:0}}
       animate={{x:0,opacity:1}}
       transition={{delay:.4,duration:1.5, ease:'easeIn'}}
      className="btn">   <span > Admission    </span>
     
     </motion.button>
     </Link>
      <motion.button 
      initial={{x:100,opacity:0}}
      animate={{x:0,opacity:1}}
      transition={{delay:.5,duration:1.6, ease:'easeIn'}}
      className="btn">
        <span >Faculty   </span>
      </motion.button>
      <motion.button 
      initial={{x:100,opacity:0}}
      animate={{x:0,opacity:1}}
      transition={{delay:.9,duration:1.7, ease:'easeIn'}}
      className="btn"
      >
        <span >Events</span>
      </motion.button>
      <motion.button  
      initial={{x:100,opacity:0}}
      animate={{x:0,opacity:1}}
      transition={{delay:1.0,duration:1.8, ease:'easeIn'}}
      className="btn"
      >
        <span >Hostel Registration</span>
      </motion.button>
</div>

     
</div>

    </div>
    </motion.div>
    </AnimatePresence>
    </>
  )
}

export default Experience