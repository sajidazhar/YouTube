import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice';
import { generateRandomName, makeRandomMessage } from '../utils/helper';
import ChatMessage from './ChatMessage'



const LiveChat = () => {

    const [LiveMessage,setLiveMessage] = useState("")
    const dispatch = useDispatch();
    const ChatMessages = useSelector((store) => store.chat.messages);
    
    useEffect(()=>{
       const i =  setInterval(()=>{
          //API POlling
          // console.log("API POlling")
          dispatch(
              addMessage({
              name:generateRandomName(),
              message:makeRandomMessage(20),
          }))
        },1500);
         
        return () => clearInterval(i);
    },[])
  return (
      <>
    <div className="w-full h-[400px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
    
     <div>{
         ChatMessages.map((c,i) =>(
        <ChatMessage key={i} name={c.name} message={c.message}/>
        ))
    }
    </div>   
    </div>
    <form className="w-full p-2 ml-2 border border-black rounded-lg" onSubmit={(e) =>{
        e.preventDefault();
        
        dispatch(addMessage({
            name:"Sajid Azhar",
            message: LiveMessage,
        }));
        setLiveMessage("");
    }}>
    <input className="px-2 w-95" type="text"
    value={LiveMessage}
    onChange={(e) =>{
        setLiveMessage(e.target.value);
    }} />
    <button className="px-2 mx-2 bg-green-100 rounded-lg ">Send</button>
 </form>
 </>
  )
}

export default LiveChat