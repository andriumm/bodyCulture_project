import React from "react";
import { useState } from "react";

export default function AllUpdates() {
	const [updates, setUpdates] = useState([]);

	const seeAllUpdates = () => {
		fetch("/updates")
			.then((response) => response.json())
			.then((updates) => {
				setUpdates(updates);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<div>
			<h6>Take a look to all the updates</h6>
			<button type="button" onClick={seeAllUpdates}>
				Get Updates!
			</button>
			<div>
				{updates.length ? (
					<ul>
						{updates.map((update) => (
							<li key={update.id}>
								<h5 className="d-inline mx-2">{update.id}</h5>
								<h5 className="d-inline">
									{/* HOW TO GET THE INFORMATION FROM THE PROFILE TALBE USING NAME AND SURNAME? */}
									{update.firstname} {update.lastname} {update.date}{" "}
									{update.weight}
									{/* profile_id,
		weight,
		arm,
		weist,
		leg,
		stressLevel,
		sleepHours,
		steps,
		dietCompliment,
		feelings,
		picFront,
		picBack,
		picSide,} */}
								</h5>
							</li>
						))}
					</ul>
				) : (
					"Click the button to get the information!"
				)}
			</div>
		</div>
	);
}
