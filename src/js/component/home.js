import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	const [color, setColor] = useState("");
	return (
		<div className="text-center mt-5">
			<div className="container bg-dark text-dark rounded semaforo">
				.
				<div
					className={
						"rounded-circle text-danger m-3 bg-danger foco " +
						(color == "red" ? color : "")
					}
					onClick={() => setColor("red")}>
					.
				</div>
				<div
					className={
						"rounded-circle text-warning m-3 bg-warning foco " +
						(color == "yellow" ? color : "")
					}
					onClick={() => setColor("yellow")}>
					.
				</div>
				<div
					className={
						"rounded-circle text-success m-3 bg-success foco " +
						(color == "green" ? color : "")
					}
					onClick={() => setColor("green")}>
					.
				</div>
			</div>
		</div>
	);
}
