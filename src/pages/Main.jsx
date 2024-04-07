import React ,{useState} from 'react';
import videoBG1 from '../assets/videoBg1.mp4';
import "../index.css";
import { useNavigate } from 'react-router-dom';


function Main(){
   
   
   const now = new Date().toLocaleTimeString();
 
   const [time, settime] = useState(now);

   const navigate = useNavigate();
   
   function updateTime() {
     const newTime = new Date().toLocaleTimeString();
     settime(newTime);
   }
   const [position, setPosition] = useState({ x: 0, y: 0 }); 
   const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
   setInterval(updateTime, 1000);
   
    
     return(
      
        <div className='main' onMouseMove={handleMouseMove}>
          <video src={videoBG1} autoPlay loop muted/>
          <div style={{ position: 'absolute', left: position.x - 10, top: position.y - 10, width: 30 ,height: 30, border:"2px solid white" , borderRadius: '50%' }}></div>
          <div className='time '>
             <h1 className=' mx-4 my-4 text-xl'>{time}</h1>
           </div>
           
            <div className="content flex-col gap-2 font-extrabold">
            
                <h1 className='text-5xl'> <span className='text-yellow-500'>Welcome </span>to our project</h1>
                <h2 className='text-3xl '>A KYC3-SDK </h2>
                <div className="mx-44 font-normal">
                <p className="text-2xl">The KYC Completion SDK in Web3 is a comprehensive solution aimed at facilitating smooth and efficient Know Your Customer (KYC) processes within decentralized applications (dApps) and platforms operating on the Web3 infrastructure. The primary objective is to streamline the KYC verification process for users, ensuring compliance with regulatory standards while minimizing friction and enhancing user experience.</p>
                </div>
                <button onClick={()=>navigate('./search')} type="button" class="transition ease-in-out delay-150 hover:scale-110  duration-300 ...  text-white bg-red-700 hover:bg-red-800 px-4 py-1 font-bold rounded-lg dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Explore</button>

               
            </div>
        </div> 
          
          
     );
}
export default Main;
