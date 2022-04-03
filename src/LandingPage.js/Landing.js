import React,{useState} from 'react'
import {animate, motion,Override,useMotionValue,AnimatePresence} from "framer-motion"
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import SideMenu from '../SidebarNav/SideBarNav';
import MovingCloud from '../MovingClouds/MovingCloud';
import { Link } from "react-router-dom";

const containerVariants = {
    hidden:{
      opacity:0,
      y:'100vw'
    },
    visible:{
      opacity:1,
      y:0,
      transition:{
        type:'tween',
        delay:0.0,
        duration:0.9
      
      },
      exit:{
        x:'-100vw',
        transition:{ease:'easeInOut'}
      }
    }
  }
const Landing = () => {
    
     const [isActive,setisActive]=useState(false);

  const toggleClass=()=>{
    setisActive(!isActive)
  };




  
    const [arrow,setArrow]=useState  (false)
  
  return (
      <>
<AnimatePresence>
      
    <motion.div
   
        
      variants={ containerVariants }
      initial="hidden"
      animate="visible"
      exit="exit"
  
      className="section-two">
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
        
        <div className="customize-wrapper">
             
      








             <div className={  isActive ?  'col-item page none': 'col-item page'} >
              <div className="col-title">
             
                <motion.h1
                initial={{y:50,opacity:0}}
                animate={{y:0,opacity:1}}
                transition={{delay:.1,duration:.3}}
                
                >Customise my experience</motion.h1>
                </div>
                <motion.div className="theimage"
                
                initial={{x:-10, y:10 ,borderBottomLeftRadius: 50,borderTopLeftRadius:60,borderTopRightRadius:40,borderBottomRightRadius:80, borderBottomWidth:100}}
                animate={{x:10,y:-10,borderBottomLeftRadius: 70,borderTopLeftRadius:95,borderTopRightRadius:60,borderBottomRightRadius:90,borderBottomWidth:20}}
                transition={{type:'tween',delay:.1,duration:5, repeat:Infinity, repeatType: "reverse",}}
                >
               

                </motion.div>
                <img class="flower" src="./assets/clipart1081.png" alt="" />
                <img class="paint" src="./assets/clipart1119812.png" alt="" />
             
                
               
                <div className="col-p-container">
                  <div className="col-p">
                  <a onClick={toggleClass} className='previousBtn ctn' >
          <FaChevronLeft />
        </a>


        <a onClick={toggleClass}   className='AfterBtn ctn' >
          <FaChevronRight />
        </a>
                  <motion.h4
                  
                  initial={{x:'-100vw'}}
                  animate={{x:0}}
                  transition={{type:'tween',delay:.2,duration:.8}}
                  >We can customise your experience to show content that fits your needs. <br />
                  First we’ll ask you a few questions to get to know more about you.</motion.h4>
                </div>
                  </div>
               
                <motion.div 
                initial={{y:'100vw'}}
                animate={{y:0}}
                transition={{delay:.1,duration:.8}}
                
                className="col-button one">
                  <button className="btn one ">
                    <span>Tailor my experience</span>
                  </button>
                </motion.div>
             
             
             </div>




             <div className='col-item page'  >
             <div className="col-title">
                
                <motion.h1
                
                initial={{y:50,opacity:0}}
animate={{y:0,opacity:1}}
transition={{delay:.1,duration:.3}}
                >I'd like to look around</motion.h1>
                </div>
                <motion.div className="theimage2"
                
                initial={{x:-20, y:20 ,borderBottomLeftRadius: 80,borderTopLeftRadius:60,borderTopRightRadius:40,borderBottomRightRadius:80, borderBottomWidth:10}}
animate={{x:0,y:-20,borderBottomLeftRadius: 100,borderTopLeftRadius:95,borderTopRightRadius:80,borderBottomRightRadius:90,borderBottomWidth:100}}
transition={{type:'tween',delay:.1,duration:5, repeat:Infinity, repeatType: "reverse",}}

                ></motion.div>
                
                <img class="tower" src="\assets\clipart2105691 (1).png" alt="" />
                <img class="backpack" src="\assets\pngfind.com-backpack-png-510605.png" alt="" />
               
                 <div className="col-p-container">
                   <div className="col-p second-p">

                   <a onClick={toggleClass}  className='previousBtn ctn' >
          <FaChevronLeft />
        </a>


        <a onClick={toggleClass}   className='AfterBtn ctn' >
          <FaChevronRight />
        </a>
                   <motion.h4
                     
                  initial={{x:'100vw'}}
                  animate={{x:0}}
                  transition={{type:'tween',delay:.2,duration:.8}}
                   >Dive right in and take a look around. You can always customise your <br /> experience later.</motion.h4>
                   </div>
               
                </div>
                <motion.div className="col-button two"
                
                initial={{y:'100vw'}}
                animate={{y:0}}
                transition={{delay:.1,duration:.8}}
                >
                  <Link to="/Desktop">
               
                  <button className="btn two">

                    <span className="texttwo"> I'd like to look around</span>
                  </button>
                  </Link>
                </motion.div>
               
             </div>
      
           </div>
           <motion.div style={{ left: 300 ,top:-1100 }} className='cloud x1'
    initial={{opacity:0,x:1200}}
    animate={{opacity:0.5,x:-1200}}
    transition={{duration:50,repeat:Infinity}}
    >
    <img className='cloud' src="https://cdn.discordapp.com/attachments/904087626712248375/950795536519290910/cloud.669571c2c454076d8f8e.png" alt="" />
        
        </motion.div>
        <motion.div  style={{ left: 300 ,top:-1000 }} className='cloud x2'
        initial={{opacity:0,x:1200}}
        animate={{opacity:1,x:-1200}}
        transition={{delay:19,duration:40,repeat:Infinity}}
  
        >
            <img className='cloud' src="https://cdn.discordapp.com/attachments/904087626712248375/950795536519290910/cloud.669571c2c454076d8f8e.png" alt="" />
            
            </motion.div>
            <motion.div style={{ left: 300 ,top:-700 }} class="cloud x3"
       
       initial={{opacity:0,x:1200}}
       animate={{opacity:1,x:-1000}}
       transition={{duration:45,repeat:Infinity}}
      >
        <img class="cloud" src="https://cdn.discordapp.com/attachments/904087626712248375/950795536519290910/cloud.669571c2c454076d8f8e.png" alt="" />
      </motion.div>

      <motion.div style={{ left: 300 ,top:-750 }} class="cloud x4"
       
       initial={{opacity:0,x:1200}}
       animate={{opacity:2,x:-1200}}
       transition={{delay:20,duration:38,repeat:Infinity}}
      >
        <img class="cloud" src="https://cdn.discordapp.com/attachments/904087626712248375/950795536519290910/cloud.669571c2c454076d8f8e.png" alt="" />
      </motion.div>

           </motion.div>
           </AnimatePresence>
        </>
  )
}

export default Landing