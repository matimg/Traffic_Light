import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	return (
		<div className="text-center mt-5">
			<div
				className="container bg-dark text-dark rounded"
				style={{ width: "220px", height: "550px" }}>
				semaforo
				<div
					className="bg-danger rounded-circle border-danger text-danger m-3"
					style={{ height: "150px" }}>
					div1
				</div>
				<div
					className="bg-warning rounded-circle text-warning m-3"
					style={{ height: "150px" }}>
					div2
				</div>
				<div
					className="bg-success rounded-circle text-success m-3"
					style={{ height: "150px" }}>
					div3
				</div>
			</div>
		</div>
	);
}
