import { useState, useEffect } from "react";

export default function Listpill() {
	const [check, setCheck] = useState(false);

	const handleCheck = () => {
		setCheck(!check);
	};

	return (
		<div 
        id="task-container"
        style={{opacity:check==false?1:0.3}}
        >
			<div
				id="check"
				style={{ backgroundColor: check == false ? "#212E5D" : "#08A8ED" }}
				onClick={() => handleCheck()}
			></div>
			<div id="task">i dont know</div>
		</div>
	);
}
