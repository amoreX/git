"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { getServerSession } from "next-auth";
import "./list.css";
import Sidebar from "./ComP/sidebar";
import Profile from "./ComP/Profile";
import Body from "./ComP/body";
import Add from "./ComP/Add";
import Modal from "./ComP/Addmodal";
import Burger from "./ComP/Burger";
import Theme from "./ComP/Theme";
import { useState, useEffect } from "react";

export default function List() {
	const { data: session } = useSession();
	const [ismobile, setIsmobile] = useState(true);
	const [isadd, setIsadd] = useState(false);

	useEffect(() => {
		console.log(session);
	}, [session]);

	const handleIsMobile = () => {
		setIsmobile(!ismobile);
	};

	const handleIsadd = () => {
		setIsadd(!isadd);
	};

	return (
		<div id="main">
			<Burger check={ismobile} mobile={handleIsMobile}></Burger>
			<Theme check={ismobile}></Theme>
			<Sidebar check={ismobile} mobile={handleIsMobile}></Sidebar>
			<Body></Body>
			<Profile></Profile>
			<Add check={ismobile} mobile={handleIsMobile} set={handleIsadd} checkmodal={isadd}></Add>
			<Modal check={isadd} set={handleIsadd}></Modal>
		</div>
	);
}
