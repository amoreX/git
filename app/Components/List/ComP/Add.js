"use client";

import { motion } from "framer-motion";

export default function Add() {
	return (
		<motion.div
			id="add"
			initial={{
				scale: 0.1,
				opacity: 0,
			}}
			transition={{
				delay: 0.3,
				type: "tween",
				ease: "easeInOut",
				duration: 0.38,
			}}
			animate={{
				scale: 1,
				opacity: 1,
			}}
		>
			+
		</motion.div>
	);
}
