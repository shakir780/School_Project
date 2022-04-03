import React from 'react'
import {animate, motion,Override,useMotionValue,AnimatePresence} from "framer-motion"
const MovingCloud = () => {
  return (
      <>
    
    <motion.div className='cloud x1'
    initial={{opacity:0,x:1200}}
    animate={{opacity:0.5,x:-1200}}
    transition={{duration:50,repeat:Infinity}}
    >
    <img className='cloud' src="https://cdn.discordapp.com/attachments/904087626712248375/950795536519290910/cloud.669571c2c454076d8f8e.png" alt="" />
        
        </motion.div>
        <motion.div className='cloud x2'
        initial={{opacity:0,x:1200}}
        animate={{opacity:1,x:-1200}}
        transition={{delay:19,duration:40,repeat:Infinity}}
  
        >
            <img className='cloud' src="https://cdn.discordapp.com/attachments/904087626712248375/950795536519290910/cloud.669571c2c454076d8f8e.png" alt="" />
            
            </motion.div>
            <motion.div class="cloud x3"
       
       initial={{opacity:0,x:1200}}
       animate={{opacity:1,x:-1000}}
       transition={{duration:45,repeat:Infinity}}
      >
        <img class="cloud" src="https://cdn.discordapp.com/attachments/904087626712248375/950795536519290910/cloud.669571c2c454076d8f8e.png" alt="" />
      </motion.div>

      <motion.div class="cloud x4"
       
       initial={{opacity:0,x:1200}}
       animate={{opacity:2,x:-1200}}
       transition={{delay:20,duration:38,repeat:Infinity}}
      >
        <img class="cloud" src="https://cdn.discordapp.com/attachments/904087626712248375/950795536519290910/cloud.669571c2c454076d8f8e.png" alt="" />
      </motion.div>
        </>
  )
}

export default MovingCloud