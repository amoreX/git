"use server";

import mongoose from "mongoose";
import User from "./Model";

export async function Remove(id, taskname) {
	const temp = await User.findOne({ email: id });
	temp.tasks.filter((task, index) => {
		// if (index == indexmine) {
		// 	task.taskstatus = false;
		// }
		if (task.taskname == taskname) {
			task.taskstatus = false;
		}
	});
	await temp.save();
}
