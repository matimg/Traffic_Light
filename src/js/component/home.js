import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	const [color, setColor] = useState("red");
	return (
		<div className="text-center mt-5">
			<div className="container bg-dark text-dark rounded semaforo">
				semaforo
				<div
					className="rounded-circle text-danger m-3 bg-danger foco luz"
					onClick={() => setColor(console.log("hola"))}>
					div1
				</div>
				<div className="bg-warning rounded-circle text-warning m-3 foco">
					div2
				</div>
				<div className="bg-success rounded-circle text-success m-3 foco">
					div3
				</div>
			</div>
		</div>
	);
}
