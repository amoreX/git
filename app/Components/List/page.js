"use client"

import {signIn,signOut,useSession} from "next-auth/react"
import { getServerSession } from "next-auth"
import "./list.css"
import Sidebar from "./ComP/sidebar"
import Profile from "./ComP/Profile"
import Body from "./ComP/body"
import Add from "./ComP/Add"
import { useEffect } from "react";

export default   function List(){
    const {data:session} =useSession();
    // const session = await getServerSession();
    useEffect(()=>{
        console.log(session);
    },[session]);

    return(
        <div id="main">
            {/* {session?.user?.name}
            <button onClick={()=>signOut({callbackUrl:"/"})}>sign out</button> */}
            <Sidebar></Sidebar>
            <Body></Body>
            <Profile></Profile>
            <Add></Add>



        </div>
    )
}