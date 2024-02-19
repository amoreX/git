"use server";

import { revalidatePath } from "next/cache";
import mongoose from "mongoose";
import User from "./Model";

export async function Addtask(task, id) {
	console.log(task);
	const temp = await User.findOne({ email: id });
	temp.tasks.push({ taskname: task, taskstatus: true });
	// console.log(temp.tasks);
	await temp.save();
	revalidatePath("/Components/List");
}
