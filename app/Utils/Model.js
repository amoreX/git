import mongoose from "mongoose";
const UserSchema = new mongoose.Schema(
	{
		email: String,
		name: String,
				tasks: [
					{
						taskname: String,
						taskstatus: Boolean,
					},
				],
	},
	{ collection: "users" }
);

let User;
try {
	User = mongoose.model("User");
} catch (error) {
	User = mongoose.model("User", UserSchema);
}

export default User;
