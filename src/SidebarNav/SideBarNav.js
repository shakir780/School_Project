import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars,faXmark} from '@fortawesome/free-solid-svg-icons'
import './SideBarNav.css'
const SideMenu = () => {
    const [arrow,setArrow]=useState  (false)
    const[showBar,setShowBar]=useState(false)

    const onBarClick=()=>{
        setShowBar(!showBar)
    }
  
  return (
  <div>
  <nav>
     
     
     
  <div onClick={onBarClick} className="openBar">
                  <FontAwesomeIcon className='fas fa-bars' id='btn' icon={faBars}/>
                      </div>
            
          <div className={showBar ? 'sidebar': 'sidebar sidebar-left'}>
       
              <header> 
                  <div onClick={onBarClick} className="closeBtn">
                  <FontAwesomeIcon className='fas fa-times'id='cancel' icon={faXmark} />
                  
                      </div>
                  </header>
                
                 
              
              <div className='SideBarTitle'

>
<h1>
Your
<br />
<span class="Sworld">World </span>
<br />
Your
<br />
<span class="Sworld">way</span>
</h1>
</div>
              <a    href="#" >
                <span>Customize Your Experince </span>
                </a>
                <a    href="#">
                    <span> Your Desktop</span>
                    </a>
                    <a    href="#">
                        <span>Your World</span>
                        </a>
                        <a    href="#">
                            <span>Login</span>
                            </a>
                            <a   href="#">
                                <span>Register</span>
                                </a>
                                <div className="logo-container">
                                <div className="image-logo">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/4/4f/ACU_Logo.png" alt="" /></div>
                                    </div>
                               
                              
                            
              </div>
  </nav>
 
  </div>
  )
}

export default SideMenu