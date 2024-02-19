"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Addtask } from "@/app/Utils/Addtask";
import { useSession } from "next-auth/react";

export default function Modal({ check, set ,uwu }) {
	const { data: session } = useSession();

	const [task, setTask] = useState("");
	const handleClick = () => {
		set();
	};
	const handleadd = () => {
		// console.log(session.user.email);
		Addtask(task, session.user.email);
		set();
		uwu();

	};
	const handlechange = (e) => {
		setTask(e.target.value);
	};
	return (
		<AnimatePresence>
			{check && (
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
						exit={{
							opacity: 0,
							scale: 0.1,
						}}
						onClick={() => handleClick()}
					></motion.div>

					<motion.div
						id="modal"
						initial={{
							opacity: 0,
							y: 500,
						}}
						transition={{
							delay: 0.1,
							type: "tween",
							ease: "easeInOut",
							duration: 0.74,
						}}
						animate={{
							opacity: 1,
							y: 0,
						}}
						exit={{
							opacity: 0,
							y: 500,
						}}
					>
						<input
							type="text"
							placeholder="Enter task"
							onChange={(e) => {
								handlechange(e);
							}}
						></input>
						<div
							id="button"
							onClick={() => {
								handleadd();
							}}
						>
							Add
						</div>
					</motion.div>
				</div>
			)}
		</AnimatePresence>
	);
}
