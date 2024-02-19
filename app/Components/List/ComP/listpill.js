import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { Remove } from "@/app/Utils/Remove";
export default function Listpill(props) {
	const { data: session } = useSession();
	const [check, setCheck] = useState(false);

	const handleCheck = () => {
		setCheck(!check);
		Remove(session.user.email, props.data.taskname);
	};

	return props.data.taskstatus == true ? (
		<div id="task-container" style={{ opacity: check == false ? 1 : 0.3 }}>
			<div id="check" onClick={() => handleCheck()}>
				<div id="check-bg" style={{ opacity: check == false ? 0 : 1 }}></div>
			</div>
			<div id="task">{props.data.taskname}</div>
		</div>
	) : (
		null
	);
}
