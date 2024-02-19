"use server";

import mongoose from "mongoose";
import User from "./Model";

export async function Data(id){
	const data= await User.findOne({email:id});
	return JSON.stringify(data);
}