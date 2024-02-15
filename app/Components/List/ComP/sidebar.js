"use client"
import Group from "./groups"
import {signOut} from "next-auth/react"
import {motion} from "framer-motion"
export default function Sidebar(){
    return(
        <motion.div 
        id="side-container"
        initial={{
            x:-100
        }}
        transition={{
            delay:0.2,
            type:"tween",
            ease:"easeInOut",
            duration:0.27
        }}
        animate={{
            x:0
        }}
        >
            <Group></Group>
        <button id="sign-out" onClick={()=>signOut({callbackUrl:"/"})}>Logout</button> 
        </motion.div>
    )
}