import React from "react";
import { useState, useEffect } from "react";

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
		<div>
			<div>
				<h3>Update</h3>
				<p>
					Please, fill the form every 14 days. In addition, at the end you have
					3 fields to upload 3 pictures dressed only with the underwear (front,
					back and side picture). I recommend you to take them the same day with
					the same light and at the same place / Debes rellenar este
					cuestionario cada 14 días y enviarlo completado. Además, dispones de 3
					espacios para subir 3 fotos en ayunas en ropa interior / deportiva
					(frontal, lateral y de espaldas). Te recomiendo hacerlas siempre el
					mismo día con la misma luz y en el mismo lugar.
				</p>
				<form onSubmit={handleSubmit}>
					<label htmlFor="dateInput">
						<p>Date: / Fecha (yyyy-mm-dd):</p>
						<input
							type="text"
							id="dateInput"
							name="date"
							value={userUpdate.date}
							onChange={handleInputChange}
						></input>
					</label>
					<label htmlFor="profile_idInput">
						<p>User number / Número de usuario:</p>
						<input
							type="number"
							id="profile_idInput"
							name="profile_id"
							value={userUpdate.profile_id}
							onChange={handleInputChange}
						></input>
					</label>
					<label htmlFor="weightInput">
						<p>Fasting weight / Peso en ayunas:</p>
						<input
							type="number"
							id="wightInput"
							name="weightInput"
							value={userUpdate.weight}
							onChange={handleInputChange}
						></input>
					</label>
					<label htmlFor="armInput">
						<p>Arm Perímeter / Perímetro del brazo (cm):</p>
						<input
							type="number"
							id="armInput"
							name="arm"
							value={userUpdate.arm}
							onChange={handleInputChange}
						></input>
					</label>
					<label htmlFor="weistInput">
						<p>Weist Perímeter / Perímetro de la cintura (cm):</p>
						<input
							type="number"
							id="weistInput"
							name="weist"
							value={userUpdate.weist}
							onChange={handleInputChange}
						></input>
					</label>
					<label htmlFor="legInput">
						<p>Leg Perímeter / Perímetro de la pierna (cm):</p>
						<input
							type="number"
							id="legInput"
							name="leg"
							value={userUpdate.leg}
							onChange={handleInputChange}
						></input>
					</label>
					<label htmlFor="stressLevelInput">
						<p>
							Stress Level from 1 to 10 (1 is no stress, 10 very stressed) /
							Estrés, del 1 al 10 (1 es tranquilo y 10 muy estresante):
						</p>
						<input
							type="number"
							id="stressLevelInput"
							name="stressLevel"
							value={userUpdate.stressLevel}
							onChange={handleInputChange}
						></input>
					</label>
					<label htmlFor="sleepHoursInput">
						<p>Sleep hours avarage/ Media de horas de sueño:</p>
						<input
							type="number"
							id="sleepHoursInput"
							name="sleepHours"
							value={userUpdate.sleepHours}
							onChange={handleInputChange}
						></input>
					</label>
					<label htmlFor="stepsInput">
						<p>Steps/day avarage: / Media de pasos diarios:</p>
						<input
							type="number"
							id="stepsInput"
							name="steps"
							value={userUpdate.steps}
							onChange={handleInputChange}
						></input>
					</label>
					<label htmlFor="dietComplimentInput">
						<p>
							{" "}
							From 1 to 5, how much have you accomplished the diet? ¿Del 1 al 5
							cuánto has seguido la dieta? (1 es nada y 5 al 100%)
						</p>
						<input
							type="number"
							id="dietComplimentInput"
							name="dietCompliment"
							value={userUpdate.dietCompliment}
							onChange={handleInputChange}
						></input>
					</label>
					<label htmlFor="FeelingsInput">
						<p>
							Express your feelings related to the diet / Explica sensaciones
							y/o cosas relacionadas con ello:
						</p>
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
							{" "}
							Explain briefly how are the trainings going (feelings, if any
							pain, doubts... / ) Entrenamiento; Explica brevemente cómo han ido
							los entrenamientos, sensaciones, agujetas, molestias, dudas etc.
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
						<p>Front picture / Fotografía frontal:</p>
						<input
							type="file"
							id="picFrontInput"
							name="picFront"
							value={userUpdate.picFront}
							onChange={handleInputChange}
						></input>
						<button>Upload</button>
					</label>
					<label htmlFor="picBackInput">
						<p>Back picture / Fotografía de espaldas:</p>
						<input
							type="file"
							id="picBackInput"
							name="picBack"
							value={userUpdate.picBack}
							onChange={handleInputChange}
						></input>
						<button>Upload</button>
					</label>
					<label htmlFor="picSideInput">
						<p>Side Picture / Fotografía lateral:</p>
						<input
							type="file"
							id="picSideInput"
							name="picSide"
							value={userUpdate.picSide}
							onChange={handleInputChange}
						></input>
						<button>Upload</button>
					</label>
					<button type="submit">Enviar</button>
				</form>
			</div>
		</div>
	);
}
