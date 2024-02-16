"use client";
import Group from "./groups";
import { signOut } from "next-auth/react";
import { motion } from "framer-motion";
export default function Sidebar({ check, mobile }) {
	return check == false ? (
		<motion.div
			id="side-container"
			initial={{
				x: -100,
			}}
			transition={{
				delay: 0.2,
				type: "tween",
				ease: "easeInOut",
				duration: 0.27,
			}}
			animate={{
				x: 0,
			}}
		>
			<Group></Group>
		</motion.div>
	) : (
		<div></div>
	);
}
