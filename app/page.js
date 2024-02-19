"use client";

import Login from "./Components/Login/login";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useRouter } from "next/router";
export default function Home() {
	// const router = useRouter();
	const { data: session } = useSession();
	if (session && session.user) {
		redirect("/Components/List");
	}

	return (
		<main>
			<Login></Login>
		</main>
	);
}
