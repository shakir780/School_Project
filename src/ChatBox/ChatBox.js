 import React,{useState,Fragment} from 'react'
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faComment} from '@fortawesome/free-solid-svg-icons'
 import './ChatBox.css'
 const ChatBox = () => {

    const [isActive,setisActive]=useState(false);
const[value,setInputValue]=useState('')
const [messages,setMessages]=useState([]);


    const toggleClass=()=>{
      setisActive(!isActive)
    };
  
   return (
    <div id= "chat-bot">
    <div class={  isActive ?  'messenger': 'messenger expanded'}>
      <div class="timestamp">04:45 AM</div>
      <div class="chatroom">
      
        <div class="msg msg-left">
          <div class="bubble">
            <h6 class="name">It's Shaks bot</h6>
            Hello, I am Shaks <br />
            How can I help you.
          </div>
        </div>
        <div class="msg msg-right">
          <div class="bubble">
            Oh! Look at you. You are awesome
          </div>
        </div>
        <div class="msg msg-right">
          <div class="bubble">
            Can you please tell me who created you?
          </div>
        </div>
        <div class="msg msg-left">
          <div class="bubble">
            Yes, Of course! Shakir Kamal created me. <br />
           
          </div>
        </div>
        <div class="msg msg-right">
          <div class="bubble">
            Yeah! He did an amazing job.<br />
            How can I contact him?
          </div>
        </div>
        <div class="msg msg-left">
          <div class="bubble">
          <br />
            <a href="www.shakirkamal.com/shakirKamal" target="_blank">www.shakirkamal.com/shakirkamal</a>
          </div>
        </div>
        <div class="msg msg-right">
          <div class="bubble">
            Thanks alot. See you next time. Good bye
          </div>
        </div>
  
        <div class="msg msg-left">
          <div class="bubble">
            Good bye. Take care
          </div>
        </div>
        
      </div>
      <div class="type-area">
        <input type="text" class="typing" placeholder="Type Here..."/>
        <span class="send">
          <i class="bi bi-arrow-return-left"></i>
        </span>
      </div>
    </div>
    <div onClick={toggleClass} class="icon">
      <div class="user">
     
   
      </div>
      <i class="bi bi-x-lg">
      <FontAwesomeIcon  icon={faComment} />
      </i>
    </div>
  </div>
   )
 }
 
 export default ChatBox