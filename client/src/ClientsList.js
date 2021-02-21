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
	console.log("this is the ViewClient", viewClient);

	//if you click on Updates history, the history of profiles will be listed
	const displayClientUpdates = async (id) => {
		try {
			const response = await axios.get(`/updates/${id}`);
			console.log("Response ClientUpdates:", response.data);
			setViewUpdates(response.data);
		} catch (error) {
			console.log(error);
		}
	};
	console.log("This is the viewUpdates:", viewUpdates);

	//if you click on one of the updates, all the info of those udpdate will be displayed.
	const showSelectedUpdate = async (id) => {
		let i = viewUpdates.findIndex((update) => {
			return update.id === id;
		});
		try {
			const response = await axios.get(`/updates/${viewUpdates[i]}`);
			console.log("i:", i, "viewupdates[i]: ", viewUpdates[i]);
			console.log("Response ClientUpdates:", response);
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
			<h4 className="text-center mb-4">These are all your clients!</h4>
			<h5 className="text-center mb-4">
				Click on the name whose info you'd like to check
			</h5>
			<div className="container">
				{clients.length ? (
					<div>
						<ul>
							{clients.map((client) => (
								<li key={client.id}>
									<span onClick={() => displayProfile(client.id)}>
										<h6 className="d-inline mx-2">{client.id}</h6>
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
			{viewClient.id && (
				<div className="container">
					<span>
						<h3>
							{viewClient.firstname} {viewClient.lastname}
						</h3>
					</span>
					<div>
						<button onClick={() => displayClientUpdates(viewClient.id)}>
							Updates History
						</button>
						<button onClick={() => deleteAllClientInfo(viewClient.id)}>
							Delete client
						</button>
					</div>
					<div>
						{viewUpdates.length ? (
							<div>
								<ul>
									{viewUpdates.map((update) => (
										<li
											key={update.id}
											onClick={() => showSelectedUpdate(update.id)}
										>
											{update.date}
										</li>
									))}{" "}
								</ul>
							</div>
						) : null}
					</div>
				</div>
			)}
			{selectedUpdate ? (
				<div>
					<h3>Update from {selectedUpdate.date}</h3>
					<div>here I'll display all the information :)</div>
				</div>
			) : null}
		</div>
	);
}

{
	/* <ul>
							
							{Object.keys(viewClient).map(function (key) {
								return <li value={key}>{viewClient[key]}</li>;
							})}
							{/* </li> 
						</ul>
						<ul>
							<li key={viewClient.id}>
								{Object.values(viewClient).map((value) => {
									return <li value={value}>{viewClient.key}</li>;
								})}
							</li>
						</ul> */
}

{
	/* <table>
							<thead>
								<tr>
									<th scope="col">Info</th>
								</tr>
							</thead>
							<tbody>
								{/* {Object.keys(viewClient).map((key) => {
									return <tr value={key}>{viewClient[key]}</tr>;
								})} 
							</tbody>
						</table>
						<table>
							<thead>
								<tr>
									<th scope="col">Answers</th>
								</tr>
							</thead>
							<tbody>
								{/* {Object.values(viewClient).map((value) => {
									return <tr value={value}>{viewClient[`${key}`]}</tr>;
								})} 
							</tbody>
						</table> */
}

{
	/* <div>{viewClient.id && <div></div>}</div> */
}
{
	/* {Object.entries(viewClient).map((key) => {
				return (
					<li>
						{viewClient[key]}: {viewClient.key}
					</li>
				);
			})} */
}
