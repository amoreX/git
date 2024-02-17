"use client";

import { motion } from "framer-motion";

export default function Modal({ check, set }) {

	const handleClick=()=>{
		set();
	}
	return check == true ? (
		<div id="modal-original">
			
		<motion.div
			id="modal-container"
			initial={{
				opacity: 0,
				scale: 0.1,
			}}
			transition={{
				type: "tween",
				ease: "easeInOut",
				duration: 0.38,
			}}
			animate={{
				opacity: 1,
				scale: 1,
			}}
			onClick={()=>handleClick()}
		></motion.div>
			<motion.div
				id="modal"
				initial={{
					opacity:0,
					y: 500,
				}}
				transition={{
					delay: 0.5,
					type: "tween",
					ease: "easeInOut",
					duration: 0.74,
				}}
				animate={{
					opacity:1,
					y: 0,
				}}
			>

				<input type="text" placeholder="Enter task"></input>
				<div id="button">Add</div>
			</motion.div>
		
		</div>
	) : (
		<div></div>
	);
}
