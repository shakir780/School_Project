import React from 'react'
import MovingCloud from '../MovingClouds/MovingCloud'
import {animate, motion,Override,useMotionValue,AnimatePresence} from "framer-motion"
import SideMenu from '../SidebarNav/SideBarNav'
import { Link } from "react-router-dom";

const containerVariants={
  hidden:{
    opacity:0,
    x:'100vw'
  },
  visible:{
    x:0,
    opacity:1,
    transition:{duration:0.9}
  },
  exit:{
    x:'-100vw',
    transition:{ease:'easeInOut'}
  }
}
const HomePage = () => {
  return (
  
    <div
    
    className="section-one">
        <SideMenu/>
    <motion.div className="title-container"
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
        </motion.div>
        <div className="sectionOne-Body">
          <motion.h1
          initial={{y:50,opacity:0}}
          animate={{y:0,opacity:1}}
          transition={{delay:.1,duration:.5}}
          >
          Welcome To Acu <br /> For a Better Future
            </motion.h1>
            <motion.h3
            initial={{y:50,opacity:0}}
            animate={{y:0,opacity:1}}
            transition={{delay:.2,duration:.3}}
            >Whether you're seeking a home away from home, the right community, <br /> or
            the opportunity to get ahead while still being yourself, discover why <br/>
          studying with us is the right choice for you
             </motion.h3>
             <motion.div  class="btn-container"
              initial={{y:50,opacity:0}}
              animate={{y:0,opacity:1}}
              transition={{delay:.4,duration:.3}}
             >

        
<Link to ="/landing">
<button  class="btn"
      
      >
      
        <span >Let's go    </span>
     
      </button>
         </Link>




</motion.div>
<MovingCloud />
            </div>
        
    </div>

   
  )
}

export default HomePage