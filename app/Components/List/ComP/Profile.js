"use client"

import {useSession} from "next-auth/react"
import { getServerSession } from "next-auth"
import { useEffect } from "react";

export default function Profile(){

    const {data:session} =useSession();
    
    useEffect(()=>{
        console.log(session);
    },[session]);
    return (
        <div id="profile-container">
            <div id="profile-pic">
                ;)
            </div>

            <div id="profile-name">
                {session?.user?.name}
            </div>

        </div>
    )
}