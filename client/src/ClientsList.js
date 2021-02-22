import React from "react";
import { useState, useEffect } from "react";
import Profile from "./Profile";
const axios = require("axios");

export default function ClientsList() {
	const [clients, setClients] = useState([]);
	const [viewClient, setViewClient] = useState("Click on a name");
	const [viewUpdates, setViewUpdates] = useState("");
	const [selectedUpdate, setSelectedUpdate] = useState(null);

	useEffect(() => {
		seeList();
	}, []);

	//as it has a useEffect above, the list is displayed immediately you click on Clients' List link
	const seeList = async () => {
		try {
			const response = await axios.get(`/profiles`);
			setClients(response.data);
		} catch (error) {
			console.log(error);
		}
	};

	const clearUpdates = () => {
		setViewUpdates("");
	};

	const clearSelectedUpdate = () => {
		setSelectedUpdate("");
	};

	//every time you click on a name from the clients'list, his/her profile, will be displayed.
	const displayProfile = async (id) => {
		try {
			const response = await axios.get(`/profiles/${id}`);

			setViewClient(response.data);
		} catch (error) {
			console.log(error);
		}
		clearUpdates();
		clearSelectedUpdate();
	};
	//console.log("this is the ViewClient", viewClient);

	//if you click on Updates history, the history of profiles will be listed
	const displayClientUpdates = async (id) => {
		try {
			const response = await axios.get(`/updates/${id}`);
			//console.log("Response ClientUpdates:", response.data);
			setViewUpdates(response.data);
		} catch (error) {
			console.log(error);
		}
	};
	//console.log("This is the viewUpdates:", viewUpdates);

	//if you click on one of the updates, all the info of those udpdate will be displayed.
	const showSelectedUpdate = async (id) => {
		let i = viewUpdates.findIndex((update) => {
			return update.id === id;
		});
		try {
			const response = await axios.get(`/updates/${i}`);
			//console.log("i:", i, "viewupdates[i]: ", viewUpdates[i]);
			//console.log("Response ClientUpdates:", response);
			setSelectedUpdate(viewUpdates[i]);
		} catch (error) {
			console.log(error);
		}
	};
	console.log("Selected Update:", selectedUpdate);

	//delete the profile of the client and all his/her updates
	const deleteAllClientInfo = async (id) => {
		try {
			await axios.delete(`/profiles/${id}`);
			console.log({ message: "The profile has been deleted!" });
			seeList();
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div>
			<div className="container text-center">
				<div className="row">
					<div className="col-4 mt-4 me-3">
						<div>
							{clients.length ? (
								<div className="col">
									<ul style={{ width: "30vw" }}>
										{clients.map((client) => (
											<li
												key={client.id}
												className="list-group-item badge bg-light text-wrap text-dark d-flex justify-content-center d-flex w-100 justify-content-between my-1"
												style={{ width: "11vw" }}
											>
												<span onClick={() => displayProfile(client.id)}>
													<h6 className="d-inline mx-2 badge bg-dark">
														id {client.id}
													</h6>
													<h6 className="d-inline">
														{client.firstname} {client.lastname}
													</h6>
												</span>
											</li>
										))}
									</ul>
								</div>
							) : null}
						</div>
					</div>
					<div className="col">
						{viewClient.id && (
							<div>
								<div className="ms-4 my-4 text-start">
									<span>
										<h3 className="mb-3">
											{viewClient.firstname} {viewClient.lastname}
										</h3>
									</span>
									<div className="mb-4">
										<button
											onClick={() => displayClientUpdates(viewClient.id)}
											className=" ms-4 me-1 btn btn-light btn-sm fw-bold"
										>
											Updates History
										</button>
										<button
											onClick={() => deleteAllClientInfo(viewClient.id)}
											className="btn btn-danger btn-sm fw-bold"
										>
											Delete
										</button>
									</div>
									<div className="bg-light  ms-3">
										<h6 className="text-dark d-inline-flex">Phone:</h6>{" "}
										<span className="text-dark d-inline-flex  me-4">
											{viewClient.phone}
										</span>
										<h6 className="text-dark d-inline-flex">Email:</h6>{" "}
										<span className="text-dark d-inline-flex me-4">
											{viewClient.email}
										</span>
										<h6 className="text-dark d-inline-flex">Year of birth:</h6>{" "}
										<span className="text-dark d-inline-flex">
											{viewClient.age}
										</span>
										<br></br>
										<h6 className="text-dark d-inline-flex">Job:</h6>{" "}
										<span className="text-dark d-inline-flex me-4">
											{viewClient.job}
										</span>
										<h6 className="text-dark d-inline-flex">Job h/day:</h6>{" "}
										<span className="text-dark d-inline-flex">
											{viewClient.jobHoursPerDay}
										</span>
										<br></br>
										<h6 className="text-dark d-inline-flex">Injuries:</h6>{" "}
										<span className="text-dark d-inline-flex">
											{viewClient.injuries}
										</span>
										<br />
										<h6 className="text-dark d-inline-flex">
											NocieveSubstances:
										</h6>{" "}
										<span className="text-dark d-inline-flex">
											{viewClient.nociveSubstances}
										</span>
										<br />
										<h6 className="text-dark d-inline-flex">Rest:</h6>{" "}
										<span className="text-dark d-inline-flex me-4">
											{viewClient.rest}
										</span>
										<h6 className="text-dark d-inline-flex">
											Sleep Environment:
										</h6>{" "}
										<span className="text-dark d-inline-flex">
											{viewClient.sleepEnvironment}
										</span>
										<br />
										<h6 className="text-dark d-inline-flex">Alegries:</h6>{" "}
										<span className="text-dark d-inline-flex me-4">
											{viewClient.alergies}
										</span>
										<h6 className="text-dark d-inline-flex">
											Carbohydrates Feeling:
										</h6>{" "}
										<span className="text-dark d-inline-flex">
											{viewClient.carbohydratesFeeling}
										</span>
										<br />
										<h6 className="text-dark d-inline-flex">
											Previous Trainings:
										</h6>{" "}
										<span className="text-dark d-inline-flex">
											{viewClient.prevTrainings}
										</span>
										<br />
										<h6 className="text-dark d-inline-flex">
											Objectives:
										</h6>{" "}
										<span className="text-dark d-inline-flex">
											{viewClient.objectives}
										</span>
										<br />
										<h6 className="text-dark d-inline-flex">
											Availability:
										</h6>{" "}
										<span className="text-dark d-inline-flex me-4">
											{viewClient.availability}
										</span>
										<h6 className="text-dark d-inline-flex">
											Number of training days:
										</h6>{" "}
										<span className="text-dark d-inline-flex">
											{viewClient.numTrainingDays}
										</span>
										<br />
										<h6 className="text-dark d-inline-flex">Squat:</h6>{" "}
										<span className="text-dark d-inline-flex me-4">
											{viewClient.squat}
										</span>
										<h6 className="text-dark d-inline-flex">Bench press:</h6>{" "}
										<span className="text-dark d-inline-flex me-4">
											{viewClient.benchPress}
										</span>
										<h6 className="text-dark d-inline-flex">Deadweight:</h6>{" "}
										<span className="text-dark d-inline-flex me-4">
											{viewClient.deadweight}
										</span>{" "}
										<br />
										<h6 className="text-dark d-inline-flex">Height:</h6>{" "}
										<span className="text-dark d-inline-flex me-4">
											{viewClient.height}
										</span>
										<h6 className="text-dark d-inline-flex">Fat:</h6>{" "}
										<span className="text-dark d-inline-flex me-4">
											{viewClient.fat}
										</span>
										<br />
										<h6 className="text-dark d-inline-flex">Kcal:</h6>{" "}
										<span className="text-dark d-inline-flex me-4">
											{viewClient.kcal}
										</span>
										<h6 className="text-dark d-inline-flex">Proteins:</h6>{" "}
										<span className="text-dark d-inline-flex me-4">
											{viewClient.proteins}
										</span>
										<h6 className="text-dark d-inline-flex">G:</h6>{" "}
										<span className="text-dark d-inline-flex me-4">
											{viewClient.g}
										</span>
										<h6 className="text-dark d-inline-flex">Ch:</h6>{" "}
										<span className="text-dark d-inline-flex me-4">
											{viewClient.ch}
										</span>
										<h6 className="text-dark d-inline-flex">Water:</h6>{" "}
										<span className="text-dark d-inline-flex">
											{viewClient.water}
										</span>
									</div>
									<div className="container mt-4">
										{viewUpdates.length ? (
											<div>
												<ul className=" ">
													{viewUpdates.map((update) => (
														<li
															key={update.id}
															onClick={() => showSelectedUpdate(update.id)}
															className="nav fw-bold"
														>
															- {update.date.substring(0, 10)}
														</li>
													))}{" "}
												</ul>
											</div>
										) : null}
									</div>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>

			{selectedUpdate ? (
				<div className="my-4 mx-4">
					<h4 className="my-4">
						Update from {selectedUpdate.date.substring(0, 10)}
					</h4>
					<div>
						<table className="table table-light table-striped table-bordered">
							<thead>
								<tr>
									<th scope="col">Date</th>
									<th scope="col">Weight</th>
									<th scope="col">Arm</th>
									<th scope="col">Weist</th>
									<th scope="col">Leg</th>
									<th scope="col">Stress Level</th>
									<th scope="col">Sleep hours</th>
									<th scope="col">Steps</th>
									<th scope="col">Diet Compliment</th>
									<th scope="col">Feelings</th>
									<th scope="col">Training Summary</th>
									<th scope="col">Front</th>
									<th scope="col">Back</th>
									<th scope="col">Side</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<th scope="row">{selectedUpdate.date.substring(0, 10)}</th>
									<td>{selectedUpdate.weight}</td>
									<td>{selectedUpdate.arm}</td>
									<td>{selectedUpdate.weist}</td>
									<td>{selectedUpdate.leg}</td>
									<td>{selectedUpdate.stressLevel}</td>
									<td>{selectedUpdate.sleepHours}</td>
									<td>{selectedUpdate.steps}</td>
									<td>{selectedUpdate.dietCompliment}</td>
									<td>{selectedUpdate.feelings}</td>
									<td>{selectedUpdate.trainingsSummary}</td>
									{/* Meanwhile I haven't implemented the pictures uploading functionality, I've filled the 3 last columns with an empty string */}
									<td>{""}</td>
									<td>{""}</td>
									<td>{""}</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			) : null}
		</div>
	);
}
