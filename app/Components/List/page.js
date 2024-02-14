"use client"

import {signIn,signOut,useSession} from "next-auth/react"
import { getServerSession } from "next-auth"
import { useEffect } from "react";

export default   function List(){
    const {data:session} =useSession();
    // const session = await getServerSession();
    useEffect(()=>{
        console.log(session);
    },[session]);
    return(
        <div>
            {session?.user?.name}
            <button onClick={()=>signOut({callbackUrl:"/"})}>sign out</button>
        </div>
    )
}