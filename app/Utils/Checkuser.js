"use server";

import mongoose from "mongoose";
import User from "./Model";

export async function Check(id) {
	let uri =
		"mongodb+srv://nihal:mdnihalrahman@getitdone.zftvqsf.mongodb.net/git?retryWrites=true&w=majority";

	await mongoose.connect(uri);

	try {
		const user = await User.findOne({ email: id });
		if (!user) {
			await User.create({ email: id,  name: "Tasks", tasks: [{}] });
		}
	} catch (err) {
		console.log("kys");
	}
}
