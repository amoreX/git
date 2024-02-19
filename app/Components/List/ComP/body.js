"use client";
import Task from "./listpill";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
export default function Body({ datta }) {
	// console.log(datta.groups);
	const [lists, setLists] = useState([]);
	useEffect(() => {
		if (datta.tasks) {
			setLists(datta.tasks.slice(1));
			console.log(datta.tasks.slice(1));
		}
	}, [datta]);
	// const p=datta.groups[0].tasks;

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
				Tasks
			</motion.div>

			<motion.div
				id="body-list"
				initial={{
					y: 100,
					opacity: 0,
				}}
				transition={{
					delay: 1.65,
					type: "tween",
					ease: "easeInOut",
					duration: 0.68,
				}}
				animate={{
					y: 0,
					opacity: 1,
				}}
			>
				{lists.map((list, index) => (
					<Task key={index} data={list}></Task>
				))}
			</motion.div>
		</div>
	);
}
