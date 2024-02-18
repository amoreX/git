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
				onClick={() => handleCheck()}
			>
				<div id="check-bg" style={{ opacity: check == false ? 0 : 1 }}></div>
			</div>
			<div id="task">i dont know</div>
		</div>
	);
}
