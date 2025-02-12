
"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import TypingText from "./TypingText";

const Profile =  () => {
    const {data:session,status}=useSession();
    if(status==="loading")return(<></>);
    if(!session){
      return (
        <div className="w-full  mt-10 ">
        <div className="flex justify-center">
        <img  className="w-40 sm:w-64  rounded-full transition" src="anonymous.jpg" alt="" />
        </div>
        <div className="flex justify-center"> <TypingText name="anonymous" /></div>
        </div>
    
      )
    }
    else{
        return (
            <>
             <div className="w-full  mt-10 ">
                <div className="flex justify-center">
                <img  className="w-40 sm:w-64  rounded-full transition" src={session.user?.image+""} alt="" />
                </div>
                <div className="flex justify-center"> <TypingText name={session.user?.name+""} /></div>
                </div>
            
           
            </>
           
            
          )
    }
}



export default Profile