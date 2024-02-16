"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { getServerSession } from "next-auth";
import "./list.css";
import Sidebar from "./ComP/sidebar";
import Profile from "./ComP/Profile";
import Body from "./ComP/body";
import Add from "./ComP/Add";
import Burger from "./ComP/Burger";
import { useState, useEffect } from "react";

export default function List() {
	const { data: session } = useSession();
	useEffect(() => {
		console.log(session);
	}, [session]);

	const [ismobile, setIsmobile] = useState(true);

	const handleIsMobile = () => {
		setIsmobile(!ismobile);
	};

	return (
		<div id="main">
			<Burger check={ismobile} mobile={handleIsMobile}></Burger>
			<Sidebar check={ismobile} mobile={handleIsMobile}></Sidebar>
			<Body></Body>
			<Profile></Profile>
			<Add></Add>
		</div>
	);
}
