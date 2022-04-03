import React from 'react'
import SideMenu from '../SidebarNav/SideBarNav'
import { Link } from 'react-router-dom'
import {animate, motion,Override,useMotionValue,AnimatePresence} from "framer-motion"
import MovingCloud from '../MovingClouds/MovingCloud'
const Desktop = () => {
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
  return (
      <>
      
     <AnimatePresence>

   
    <motion.div
     variants={ containerVariants }
     initial="hidden"
     animate="visible"
     exit="exit"
     className='Desktop-section'>
<SideMenu />
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
        <div className="plate">
            <img className='plate-img' src="\assets\disk_export_blue.png" alt="" />
        {/* 
        
      
       
      
      
     
       
      */}

      
        </div>
        <div className="bird-image">
        <img className='bird' src="./assets/pngegg.png"  />
        </div>
<div className="ball-image">
<img className='ball' src=".\assets\23024-6-sports-ball-clipart_800x800.png" alt="" />
</div>
<div className="calender-image">
<img className='calender' src=".\assets\Calendar-PNG-HD-Quality.png" alt="" />
</div>
<div className="apply-img">
<img className='apply' src=".\assets\kisspng-technical-university-of-dortmund-application-for-e-apply-now-5b2d8cbc698752.5361828815297118044323.png" alt="" />
</div>
<div className='desktopbackpackimg'>
<img className='desktopbackpack' src=".\assets\pngfind.com-backpack-png-510605.png" alt="" />
</div>
<div className="classtreesImg">
<img className="classtrees" src=".\assets\kisspng-school-classroom-study-skills-student-mathematics-5b3bbb2688aca3.0782725615306411905598.png" alt="" srcset="" />
</div>

<div className="earth-image">
<img className="earth" src=".\assets\kisspng-earth-drawing-earth-cartoon-5aba791f412f56.673325761522170143267.png" alt="" srcset="" />
</div>
<div className="camera-image">
<img className="camera" src=".\assets\—Pngtree—photo camera_4732850.png" alt="" srcset="" />
</div>
<div className="sunglasses">
<img className="glass" src=".\assets\—Pngtree—black ink ink summer sea_6221773.png" alt="" srcset="" />
</div>
    

 


<motion.div style={{ left: 300 ,top:-1100 }} className='cloud x1'
    initial={{opacity:0,x:100}}
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

export default Desktop