import React from "react";
import { useState, useEffect } from "react";

export default function Update() {
	const [userUpdate, setUserUpdate] = useState({
		date: "",
		profile_id: "",
		weight: "",
		arm: "",
		weist: "",
		leg: "",
		stressLevel: "",
		sleepHours: "",
		steps: "",
		dietCompliment: "",
		feelings: "",
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
		fetch("/users", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ userUpdate }),
		});
		// .then(
		// 	() => {
		// 		res.send({
		// 			message: "Tu información se ha guardado correctamente!",
		// 		});
		// 	} //confirms the info has been submited.
		// )
		// .catch((error) => {
		// 	console.log(error);
		// });
	};

	return (
		<div>
			<div>
				<h3>Update</h3>
				<p>
					Debes rellenar este cuestionario cada 14 días y enviarlo completado.
					Además, dispones de 3 espacios para subir 3 fotos en ayunas en ropa
					interior / deportiva (frontal, lateral y de espaldas). Te recomiendo
					hacerlas siempre el mismo día con la misma luz y en el mismo lugar.
				</p>
				<form onSubmit={handleSubmit}>
					<label htmlFor="dateInput">
						<p>Fecha (yyyy-mm-dd):</p>
						<input
							type="text"
							id="dateInput"
							name="date"
							value={userUpdate.date}
							onChange={handleInputChange}
						></input>
					</label>
					<label htmlFor="profile_idInput">
						<p>Número de usuario:</p>
						<input
							type="number"
							id="profile_idInput"
							name="profile_id"
							value={userUpdate.profile_id}
							onChange={handleInputChange}
						></input>
					</label>
					<label htmlFor="weightInput">
						<p>Peso en ayunas:</p>
						<input
							type="text"
							id="dateInput"
							name="weightInput"
							value={userUpdate.date}
							onChange={handleInputChange}
						></input>
					</label>
					<label htmlFor="armInput">
						<p>Perímetro del brazo (cm):</p>
						<input
							type="text"
							id="armInput"
							name="arm"
							value={userUpdate.arm}
							onChange={handleInputChange}
						></input>
					</label>
					<label htmlFor="weistInput">
						<p>Perímetro de la cintura (cm):</p>
						<input
							type="text"
							id="weistInput"
							name="weist"
							value={userUpdate.weist}
							onChange={handleInputChange}
						></input>
					</label>
					<label htmlFor="legInput">
						<p>Perímetro de la pierna (cm):</p>
						<input
							type="text"
							id="legInput"
							name="leg"
							value={userUpdate.leg}
							onChange={handleInputChange}
						></input>
					</label>
					<label htmlFor="stressLevelInput">
						<p>Estrés, del 1 al 10 (1 es tranquilo y 10 muy estresante):</p>
						<input
							type="text"
							id="stressLevelInput"
							name="stressLevel"
							value={userUpdate.stressLevel}
							onChange={handleInputChange}
						></input>
					</label>
					<label htmlFor="sleepHoursInput">
						<p>Media de horas de sueño:</p>
						<input
							type="text"
							id="sleepHoursInput"
							name="sleepHours"
							value={userUpdate.sleepHours}
							onChange={handleInputChange}
						></input>
					</label>
					<label htmlFor="stepsInput">
						<p>Media de pasos diarios:</p>
						<input
							type="text"
							id="stepsInput"
							name="steps"
							value={userUpdate.steps}
							onChange={handleInputChange}
						></input>
					</label>
					<label htmlFor="dietComplimentInput">
						<p>
							¿Del 1 al 5 cuánto has seguido la dieta? (1 es nada y 5 al 100%)
						</p>
						<input
							type="text"
							id="dietComplimentInput"
							name="dietCompliment"
							value={userUpdate.dietCompliment}
							onChange={handleInputChange}
						></input>
					</label>
					<label htmlFor="FeelingsInput">
						<p>Explica sensaciones y/o cosas relacionadas con ello:</p>
						<input
							type="text"
							id="FeelingsInput"
							name="Feelings"
							value={userUpdate.Feelings}
							onChange={handleInputChange}
						></input>
					</label>
					<label htmlFor="trainingsSummaryInput">
						<p>
							Entrenamiento; Explica brevemente cómo han ido los entrenamientos,
							sensaciones, agujetas, molestias, dudas etc.
						</p>
						<input
							type="text"
							id="trainingsSummaryInput"
							name="trainingsSummary"
							value={userUpdate.trainingsSummary}
							onChange={handleInputChange}
						></input>
					</label>
					<p></p>
					<label htmlFor="picFrontInput">
						<p>Fotografía frontal:</p>
						<input
							type="text"
							id="picFrontInput"
							name="picFront"
							value={userUpdate.picFront}
							onChange={handleInputChange}
						></input>
					</label>
					<label htmlFor="picBackInput">
						<p>Fotografía de espaldas:</p>
						<input
							type="text"
							id="picBackInput"
							name="picBack"
							value={userUpdate.picBack}
							onChange={handleInputChange}
						></input>
					</label>
					<label htmlFor="picSideInput">
						<p>Fotografía lateral:</p>
						<input
							type="text"
							id="picSideInput"
							name="picSide"
							value={userUpdate.picSide}
							onChange={handleInputChange}
						></input>
					</label>
					<button type="submit">Enviar</button>
				</form>
			</div>
		</div>
	);
}
