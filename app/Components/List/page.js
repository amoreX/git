"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { getServerSession } from "next-auth";
import "./list.scss";
import Sidebar from "./ComP/sidebar";
import Profile from "./ComP/Profile";
import Body from "./ComP/body";
import Add from "./ComP/Add";
import Modal from "./ComP/Addmodal";
import Burger from "./ComP/Burger";
import Theme from "./ComP/Theme";
import { useState, useEffect } from "react";
import { Check } from "@/app/Utils/Checkuser";
import { Data } from "@/app/Utils/Data";
import { json } from "react-router";

export default function List() {
	const [group, setGroup] = useState(0);
	const [actualdata, setActualdata] = useState({});
	const { data: session } = useSession();
	const [ismobile, setIsmobile] = useState(true);
	const [isadd, setIsadd] = useState(false);
	const [theme, setTheme] = useState("theme-1");

	useEffect(() => {
		console.log(session);

		// console.log(session?.user?.email);
		if (session?.user?.email) {
			const gettingdata = async () => {
				await Check(session?.user?.email);
				const pp = await Data(session?.user?.email);
				setActualdata(JSON.parse(pp));
				// console.log(JSON.parse(pp));
			};
			gettingdata();
		}
	}, [session]);

	const handleIsMobile = () => {
		setIsmobile(!ismobile);
	};

	const handleIsadd = () => {
		setIsadd(!isadd);
	};
	const handleTheme = () => {
		setTheme(
			theme == "theme-1"
				? "theme-2"
				: theme == "theme-2"
				? "theme-3"
				: theme == "theme-3"
				? "theme-1"
				: "theme-1"
		);
	};

	const handlegroup = () => {};
	return (
		<div className={theme}>
			<div id="main">
				{/* <Burger check={ismobile} mobile={handleIsMobile}></Burger> */}
				<Theme check={ismobile} changetheme={handleTheme}></Theme>
				{/* <Sidebar check={ismobile} mobile={handleIsMobile}></Sidebar> */}
				{actualdata && <Body datta={actualdata}></Body>}
				<Profile></Profile>
				<Add check={ismobile} mobile={handleIsMobile} set={handleIsadd} checkmodal={isadd}></Add>
				<Modal check={isadd} set={handleIsadd}></Modal>
			</div>
		</div>
	);
}
