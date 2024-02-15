"use client";

import Task from "./listpill";
import { motion } from "framer-motion";
export default function Body() {
	return (
		<div id="body-container">
			<motion.div
				id="body-header"
				initial={{
					opacity: 0,
					y: 100,
				}}
				transition={{
					delay: 0.56,
					type: "tween",
					ease: "easeInOut",
					duration: 0.38,
				}}
				animate={{
					opacity: 1,
					y: 0,
				}}
			>
				Daily
			</motion.div>

			<motion.div
				id="body-list"
				initial={{
					y: 100,
					opacity: 0,
				}}
				transition={{
					delay: 0.65,
					type: "tween",
					ease: "easeInOut",
					duration: 0.68,
				}}
				animate={{
					y: 0,
					opacity: 1,
				}}
			>
				<Task></Task>
				<Task></Task>
				<Task></Task>
			</motion.div>
		</div>
	);
}
