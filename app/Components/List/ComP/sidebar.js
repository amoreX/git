import Group from "./groups"
import {signIn,signOut,useSession} from "next-auth/react"
export default function Sidebar(){
    return(
        <div id="side-container">
            <Group></Group>
        <button id="sign-out" onClick={()=>signOut({callbackUrl:"/"})}>Logout</button> 
        </div>
    )
}