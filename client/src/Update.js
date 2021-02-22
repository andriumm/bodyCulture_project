import React from "react";
import { useState } from "react";

export default function Update() {
	const [userUpdate, setUserUpdate] = useState({
		date: "",
		profile_id: 0,
		weight: 0,
		arm: 0,
		weist: 0,
		leg: 0,
		stressLevel: 0,
		sleepHours: 0,
		steps: 0,
		dietCompliment: 0,
		feelings: "",
		trainingsSummary: "",
		picFront: "",
		picBack: "",
		picSide: "",
	});

	const handleSubmit = (event) => {
		event.preventDefault();
		addUpdate();
		console.log("I work");
	};

	const handleInputChange = ({ target }) => {
		const { name, value } = target;
		setUserUpdate((state) => ({
			...state,
			[name]: value,
		}));
	};

	const addUpdate = () => {
		fetch("/updates", {
			method: "POST",
			headers: {
				//it doesn't work with multipart/form-data.
				//"Content-Type": "multipart/form-data",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(userUpdate),
		})
			.then(() => console.log({ message: "Your update has been sent!" }))

			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<div className="mx-4">
			<h3 className="mb-4">UPDATE</h3>
			<p className="my-4 mx-4 text-start">
				Please, fill the form every 14 days. In addition, at the end you have 3
				fields to upload 3 pictures dressed only with the underwear (front, back
				and side picture). I recommend you to take them the same day with the
				same light and at the same place / Debes rellenar este cuestionario cada
				14 días y enviarlo completado. Además, dispones de 3 espacios para subir
				3 fotos en ayunas en ropa interior / deportiva (frontal, lateral y de
				espaldas). Te recomiendo hacerlas siempre el mismo día con la misma luz
				y en el mismo lugar.
			</p>
			<form
				onSubmit={handleSubmit}
				className="text-start mb-4 mx-4 form-control"
			>
				<label htmlFor="dateInput" className="my-3 mx-4 d-block">
					<p>
						Date (yyyy-mm-dd):{" "}
						<span style={{ color: "grey" }}>/ Fecha (aaaa/mm/dd):</span>
					</p>
					<input
						type="text"
						id="dateInput"
						name="date"
						value={userUpdate.date}
						onChange={handleInputChange}
						className="form-control"
						style={{ width: "8vw" }}
					></input>
				</label>
				<label htmlFor="profile_idInput" className="my-3 mx-4 d-block">
					<p>
						User number{" "}
						<span style={{ color: "grey" }}>/ Número de usuario: </span>
					</p>
					<input
						type="number"
						id="profile_idInput"
						name="profile_id"
						value={userUpdate.profile_id}
						onChange={handleInputChange}
						className="form-control"
						style={{ width: "8vw" }}
					></input>
				</label>
				<label htmlFor="weightInput" className="my-3 mx-4 d-block">
					<p>
						Fasting weight{" "}
						<span style={{ color: "grey" }}>/ Peso en ayunas: </span>
					</p>
					<input
						type="number"
						id="wightInput"
						name="weightInput"
						value={userUpdate.weight}
						onChange={handleInputChange}
						className="form-control"
						style={{ width: "8vw" }}
					></input>
				</label>
				<label htmlFor="armInput" className="my-3 mx-4 d-block">
					<p>
						Arm Perímeter (cm){" "}
						<span style={{ color: "grey" }}>/ Perímetro del brazo (cm): </span>
					</p>
					<input
						type="number"
						id="armInput"
						name="arm"
						value={userUpdate.arm}
						onChange={handleInputChange}
						className="form-control"
						style={{ width: "8vw" }}
					></input>
				</label>
				<label htmlFor="weistInput" className="my-3 mx-4 d-block">
					<p>
						Weist Perímeter (cm){" "}
						<span style={{ color: "grey" }}>
							/ Perímetro de la cintura (cm):{" "}
						</span>
					</p>
					<input
						type="number"
						id="weistInput"
						name="weist"
						value={userUpdate.weist}
						onChange={handleInputChange}
						className="form-control"
						style={{ width: "8vw" }}
					></input>
				</label>
				<label htmlFor="legInput" className="my-3 mx-4 d-block">
					<p>
						Leg Perímeter{" "}
						<span style={{ color: "grey" }}>Perímetro de la pierna (cm): </span>
						/{" "}
					</p>
					<input
						type="number"
						id="legInput"
						name="leg"
						value={userUpdate.leg}
						onChange={handleInputChange}
						className="form-control"
						style={{ width: "8vw" }}
					></input>
				</label>
				<label htmlFor="stressLevelInput" className="my-3 mx-4 d-block">
					<p>
						Stress Level from 1 to 10 (1 is no stress, 10 very stressed){" "}
						<span style={{ color: "grey" }}>
							/ Estrés, del 1 al 10 (1 es tranquilo y 10 muy estresante):
						</span>
					</p>
					<input
						type="number"
						id="stressLevelInput"
						name="stressLevel"
						value={userUpdate.stressLevel}
						onChange={handleInputChange}
						className="form-control"
						style={{ width: "8vw" }}
					></input>
				</label>
				<label htmlFor="sleepHoursInput" className="my-3 mx-4 d-block">
					<p>
						Sleep hours avarage{" "}
						<span style={{ color: "grey" }}>/ Media de horas de sueño: </span>
					</p>
					<input
						type="number"
						id="sleepHoursInput"
						name="sleepHours"
						value={userUpdate.sleepHours}
						onChange={handleInputChange}
						className="form-control"
						style={{ width: "8vw" }}
					></input>
				</label>
				<label htmlFor="stepsInput" className="my-3 mx-4 d-block">
					<p>
						Steps/day avarage:{" "}
						<span style={{ color: "grey" }}>/ Media de pasos diarios:</span>
					</p>
					<input
						type="number"
						id="stepsInput"
						name="steps"
						value={userUpdate.steps}
						onChange={handleInputChange}
						className="form-control"
						style={{ width: "8vw" }}
					></input>
				</label>
				<label htmlFor="dietComplimentInput" className="my-3 mx-4 d-block">
					<p>
						{" "}
						From 1 to 5, how much have you accomplished the diet?{" "}
						<span style={{ color: "grey" }}>
							/¿Del 1 al 5 cuánto has seguido la dieta? (1 es nada y 5 al 100%)
						</span>
					</p>
					<input
						type="number"
						id="dietComplimentInput"
						name="dietCompliment"
						value={userUpdate.dietCompliment}
						onChange={handleInputChange}
						className="form-control"
						style={{ width: "8vw" }}
					></input>
				</label>
				<label htmlFor="FeelingsInput" className="my-3 mx-4 d-block">
					<p>
						Express your feelings related to the diet{" "}
						<span style={{ color: "grey" }}>
							/ Explica sensaciones y/o cosas relacionadas con ello:{" "}
						</span>
					</p>
					<input
						type="text"
						id="FeelingsInput"
						name="Feelings"
						value={userUpdate.Feelings}
						onChange={handleInputChange}
						className="form-control"
						style={{ width: "80vw" }}
					></input>
				</label>
				<label htmlFor="trainingsSummaryInput" className="my-3 mx-4 d-block">
					<p>
						{" "}
						Explain briefly how are the trainings going (feelings, if any pain,
						doubts...)
						<span style={{ color: "grey" }}>
							/ Explica brevemente cómo han ido los entrenamientos, sensaciones,
							agujetas, molestias, dudas etc.
						</span>
					</p>
					<input
						type="text"
						id="trainingsSummaryInput"
						name="trainingsSummary"
						value={userUpdate.trainingsSummary}
						onChange={handleInputChange}
						className="form-control"
						style={{ width: "80vw" }}
					></input>
				</label>
				<p></p>
				<label htmlFor="picFrontInput" className="my-3 mx-4 d-block">
					<p>
						Front picture{" "}
						<span style={{ color: "grey" }}>/ Fotografía frontal: </span>{" "}
					</p>
					<input
						type="file"
						id="picFrontInput"
						name="picFront"
						value={userUpdate.picFront}
						onChange={handleInputChange}
						className="form-control"
						style={{ width: "20vw" }}
					></input>
					<button>Upload</button>
				</label>
				<label htmlFor="picBackInput" className="my-3 mx-4 d-block">
					<p>
						Back picture{" "}
						<span style={{ color: "grey" }}>/ Fotografía de espaldas: </span>
					</p>
					<input
						type="file"
						id="picBackInput"
						name="picBack"
						value={userUpdate.picBack}
						onChange={handleInputChange}
						className="form-control"
						style={{ width: "20vw" }}
					></input>
					<button>Upload</button>
				</label>
				<label htmlFor="picSideInput" className="my-3 mx-4 d-block">
					<p>
						Side Picture{" "}
						<span style={{ color: "grey" }}>/ Fotografía lateral:</span>
					</p>
					<input
						type="file"
						id="picSideInput"
						name="picSide"
						value={userUpdate.picSide}
						onChange={handleInputChange}
						className="form-control"
						style={{ width: "20vw" }}
					></input>
					<button>Upload</button>
				</label>
				<div className="text-center">
					<button type="submit" className="btn btn-dark btn-lg my-3">
						Submit / Enviar
					</button>
				</div>
			</form>
		</div>
	);
}
