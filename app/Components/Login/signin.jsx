"use client"

import React from 'react'
import {signIn,signOut,useSession} from "next-auth/react"
import {motion} from 'framer-motion'


export default function Signin({isload}){

    const handleOnclick=()=>{
        isload();
        setTimeout(() => {
            signIn("google", { callbackUrl: "/Components/List" });
        }, 2000);
    };
    return(
        <motion.div 
        id="google"
        initial={{
            rotate:'25deg',
            opaity:0,
            y:100
        }}
        transition={{
            delay:0.5,
            type:"tween",
            ease:"easeInOut",
            duration:0.54
        }}
        animate={{
            rotate:'0deg',
            y:0,
            opacity:1
        }}

        onClick={()=>handleOnclick()}

        >
            Sign in with google
        </motion.div>
        
    )
}