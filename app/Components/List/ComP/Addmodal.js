"use client";

import { motion } from "framer-motion";

export default function Modal({ check, set }) {
	return check == true ? (
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
		>
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
		</motion.div>
	) : (
		<div></div>
	);
}
