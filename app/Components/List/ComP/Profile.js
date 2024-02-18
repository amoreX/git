"use client";
import { motion } from "framer-motion";
import { useSession } from "next-auth/react";
import { getServerSession } from "next-auth";
import { signOut } from "next-auth/react";
import { useEffect } from "react";

export default function Profile() {
	const { data: session } = useSession();

	useEffect(() => {
		console.log(session);
	}, [session]);
	return (
		<motion.div
			id="profile-container"
			initial={{
				scale: 0.1,
				opacity: 0,
			}}
			transition={{
				delay: 0.4,
				type: "tween",
				ease: "easeInOut",
				duration: 0.27,
			}}
			animate={{
				scale: 1,
				opacity: 1,
			}}

			onClick={() => signOut({ callbackUrl: "/" })}
		>
			<div id="profile-pic"><img id="picture" src={session?.user?.image} /></div>

			<div id="profile-name">{session?.user?.name}</div>
		</motion.div>
	);
}
