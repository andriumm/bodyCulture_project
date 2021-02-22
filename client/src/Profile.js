import React from "react";
import { useState } from "react";
//const axios = require("axios").default;

export default function Profile() {
	// create a use state for each field
	const [userInfo, setUserInfo] = useState({
		date: "",
		firstname: "",
		lastname: "",
		age: undefined,
		email: "",
		phone: undefined,
		job: "",
		jobHoursPerDay: "",
		injuries: "",
		nociveSubstances: "",
		suplements: "",
		rest: "",
		nightWakeUps: undefined,
		sleepEnvironment: "",
		alergies: "",
		carbohydratesFeeling: "",
		prevTrainings: "",
		objectives: "",
		availability: "",
		numTrainingDays: "",
		squat: "",
		benchPress: "",
		deadweight: "",
		height: undefined,
		fat: undefined,
		kcal: undefined,
		proteins: undefined,
		g: undefined,
		ch: undefined,
		water: undefined,
	});

	//to send the information the user has filled in the form
	const handleSubmit = (event) => {
		event.preventDefault();
		addProfile();
		console.log("I work");
	};

	const handleInputChange = ({ target }) => {
		const { name, value } = target;
		setUserInfo((state) => ({
			...state,
			[name]: value,
		}));
	};

	//this function is triggered when we submit the form with the button enviar. (that's why it is called in the handleSubmit function)
	//pending to refactor this function, I tried, but I was messing up with something
	const addProfile = async () => {
		fetch("/profiles", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(userInfo),
		})
			.then(() => console.log({ message: "Your information has been sent!" }))

			.catch((error) => {
				console.log(error);
			});
		// try {
		// 	await axios.post(`/profiles`);
		// 	console.log({ message: "Your information has been sent!" });
		// } catch (error) {
		// 	console.error(error);
		// }
	};
	return (
		<div className="mx-4">
			<h3 className="mb-4">PROFILE</h3>
			<p className="my-4 mx-4 text-start">
				Antes de responder el cuestionario, ten en cuenta que aquí no hay
				respuestas correctas o incorrectas – simplemente debes ser completamente
				sincero/a para que pueda ayudarte de la mejor manera a conseguir tus
				metas.
			</p>
			<form
				onSubmit={handleSubmit}
				className="text-start mb-4 mx-4 form-control"
			>
				<h5 className="my-4 fw-bolder">
					CONTACT DETAILS
					<span style={{ color: "grey" }}>/ DATOS DE CONTACTO</span>
				</h5>
				<label htmlFor="dateInput" className="my-3 mx-4 d-block">
					<p>
						Date (yyyy-mm-dd):
						<span style={{ color: "grey" }}>/ Fecha (aaaa/mm/dd):</span>
					</p>
					<input
						type="text"
						id="dateInput"
						name="date"
						value={userInfo.date}
						onChange={handleInputChange}
						className="form-control"
						style={{ width: "11vw" }}
					></input>
				</label>
				<label htmlFor="firstnameInput" className="mb-3 mx-4">
					<p>
						Name: <span style={{ color: "grey" }}>/ Nombre:</span>
					</p>
					<input
						type="text"
						id="firstnameInput"
						name="firstname"
						value={userInfo.firstname}
						onChange={handleInputChange}
						className="form-control"
					></input>
				</label>
				<label htmlFor="lastnameInput" className="mb-3 mx-4">
					<p>
						Lastname: <span style={{ color: "grey" }}>/ Apellidos:</span>
					</p>
					<input
						type="text"
						id="lastnameInput"
						name="lastname"
						value={userInfo.lastname}
						onChange={handleInputChange}
						className="form-control"
					></input>
				</label>
				<label htmlFor="ageInput" className="mb-3 mx-4">
					<p>
						Year of birth:
						<span style={{ color: "grey" }}>/ Año de nacimiento:</span>
					</p>
					<input
						type="number"
						id="ageInput"
						name="age"
						value={userInfo.age}
						onChange={handleInputChange}
						className="form-control"
					></input>
				</label>
				<br></br>
				<label htmlFor="emailInput" className="mb-3 mx-4">
					<p>
						Email: <span style={{ color: "grey" }}> / Correo electrónico:</span>
					</p>
					<input
						type="email"
						id="emailInput"
						name="email"
						value={userInfo.email}
						onChange={handleInputChange}
						className="form-control"
					></input>
				</label>
				<label htmlFor="phoneInput" className="mb-3 mx-4">
					<p>
						Phone <span style={{ color: "grey" }}> / Móvil/Telf</span>
					</p>
					<input
						type="text"
						id="phoneInput"
						name="phone"
						value={userInfo.phone}
						onChange={handleInputChange}
						className="form-control"
					></input>
				</label>
				<h5 className="my-4 fw-bolder">
					HEALTH AND LIFESTYLE{" "}
					<span style={{ color: "grey" }}>/ SALUD Y ESTILO DE VIDA</span>
				</h5>
				<label htmlFor="jobInput" className="my-3 mx-4">
					<p>
						What's your job?
						<span style={{ color: "grey" }}> / ¿A qué te dedicas?</span>
					</p>
					<input
						type="text"
						id="jobInput"
						name="job"
						value={userInfo.job}
						onChange={handleInputChange}
						className="form-control"
					></input>
				</label>
				<label htmlFor="jobHoursPerDayInput" className="my-3 mx-4">
					<p>
						How many hours do you work per day?
						<span style={{ color: "grey" }}>
							/ ¿Cuántas horas trabajas al día?
						</span>
					</p>
					<input
						type="number"
						id="jobHoursPerDayInput"
						name="jobHoursPerDay"
						value={userInfo.jobHoursPerDay}
						onChange={handleInputChange}
						className="form-control"
					></input>
				</label>
				<label htmlFor="injuriesInput" className="my-3 mx-4">
					<p>
						Have you ever had any injury, medical problems that could have a bad
						impact in the training program?
						<span style={{ color: "grey" }}>
							/ ¿Has tenido alguna lesión previa / problemas médicos que puedan
							tener repercusiones en un programa de ejercicio?
						</span>
					</p>
					<input
						type="text"
						id="injuriesInput"
						name="injuries"
						value={userInfo.injuries}
						onChange={handleInputChange}
						className="form-control"
					></input>
				</label>
				<label htmlFor="nociveSubstancesInput" className="my-3 mx-4">
					<p>
						Do you smoke, drink or take drugs?
						<span style={{ color: "grey" }}>
							/ ¿Fumas, bebes o tomas algún tipo de sustancia estupefaciente?
						</span>
					</p>
					<input
						type="text"
						id="nociveSubstancesInput"
						name="nociveSubstances"
						value={userInfo.nociveSubstances}
						onChange={handleInputChange}
						className="form-control"
					></input>
				</label>
				<label htmlFor="suplementsInput" className="my-3 mx-4">
					<p>
						Do you take any suplmenent for training or for your health?
						<span style={{ color: "grey" }}>
							/ ¿Tomas en la actualidad algún suplemento deportivo o para tu
							salud?
						</span>
					</p>
					<input
						type="text"
						id="suplementsInput"
						name="suplements"
						value={userInfo.suplements}
						onChange={handleInputChange}
						className="form-control"
					></input>
				</label>

				<h5 className="my-4 fw-bolder">
					SLEEP AND NUTRITION{" "}
					<span style={{ color: "grey" }}>/ SUEÑO Y NUTRICIÓN</span>
				</h5>
				<label htmlFor="restInput" className="my-3 mx-4">
					<p>
						Do you have a good rest at when you sleep at night?
						<span style={{ color: "grey" }}>
							/ ¿Duermes y descansas bien por la noche?
						</span>
					</p>
					<input
						type="text"
						id="restInput"
						name="rest"
						value={userInfo.rest}
						onChange={handleInputChange}
						className="form-control"
					></input>
				</label>
				<label htmlFor="nightWakeUpsInput" className="my-3 mx-4">
					<p>
						Do you wake up at night? If yes, how many times?
						<span style={{ color: "grey" }}>
							/ ¿Te levantas a media noche? Si es así, ¿cuántas veces?
						</span>
					</p>
					<input
						type="text"
						id="nightWakeUpsInput"
						name="nightWakeUps"
						value={userInfo.nightWakeUps}
						onChange={handleInputChange}
						className="form-control"
					></input>
				</label>
				<label htmlFor="sleepEnvironmentInput" className="my-3 mx-4">
					<p>
						How is your sleep environment? (noises, lights, devices...)
						<span style={{ color: "grey" }}>
							/ ¿Duermes con ruido, luz o aparatos electrónicos encendidos?
						</span>
					</p>
					<input
						type="text"
						id="sleepEnvironmentInput"
						name="sleepEnvironment"
						value={userInfo.sleepEnvironment}
						onChange={handleInputChange}
						className="form-control"
					></input>
				</label>
				<label htmlFor="alergiesInput" className="my-3 mx-4">
					<p>
						Do you have any allergy or food intolerance?
						<span style={{ color: "grey" }}>
							/ ¿Tienes alguna alergia o intolerancia a algún alimento?
						</span>
					</p>
					<input
						type="text"
						id="alergiesInput"
						name="alergies"
						value={userInfo.alergies}
						onChange={handleInputChange}
						className="form-control"
					></input>
				</label>
				<label htmlFor="carbohydratesFeelingInput" className="my-3 mx-4">
					<p>
						How do you feel when you consume carbohydrates?
						<span style={{ color: "grey" }}>
							/ ¿Cómo te sientes después de comer muchos carbohidratos?
							Especialmente productos con gluten / a base de trigo (ej: pasta,
							cereales etc)
						</span>
					</p>
					<select
						type="text"
						id="carbohydratesFeelingInput"
						name="carbohydratesFeeling"
						value={userInfo.carbohydratesFeeling}
						onChange={handleInputChange}
						className="form-select"
						style={{ width: "25vw" }}
					>
						<option>Energized / Energizado/a</option>
						<option>Sleepy / somnoliento/a</option>
						<option>Sick / Enfermo</option>
						<option>Any effect / Ningún efecto</option>
					</select>
				</label>
				<h5 className="my-4 fw-bolder">
					TRAINING <span style={{ color: "grey" }}>/ ENTRENAMIENTO</span>
				</h5>
				<label htmlFor="prevTrainingsInput" className="my-3 mx-4 d-block">
					<p>
						How have you trained lately?
						<span style={{ color: "grey" }}>
							/ ¿Cómo has entrenado últimamente?
						</span>
					</p>
					<input
						type="text"
						id="prevTrainingsInput"
						name="prevTrainings"
						value={userInfo.prevTrainings}
						onChange={handleInputChange}
						className="form-control"
					></input>
				</label>
				<label htmlFor="objectivesInput" className="my-3 mx-4 d-block">
					<p>
						What are your goals <span style={{ color: "grey" }}></span>/ ¿Cuáles
						son tus objetivos?
					</p>
					<input
						type="text"
						id="objectivesInput"
						name="objectives"
						value={userInfo.objectives}
						onChange={handleInputChange}
						className="form-control"
					></input>
				</label>
				<label htmlFor="availabilityInput" className="my-3 mx-4">
					<p>
						What's your availability? How much time do you have
						<span style={{ color: "grey" }}>/ ¿De cuánto tiempo dispones?</span>
					</p>
					<input
						type="text"
						id="availabilityInput"
						name="availability"
						value={userInfo.availability}
						onChange={handleInputChange}
						className="form-control"
					></input>
				</label>
				<label htmlFor="numTrainingDaysInput" className="my-3 mx-4">
					<p>
						How many days per week you would like to train
						<span style={{ color: "grey" }}>
							/ ¿Cuántos días te gustaría entrenar?
						</span>
					</p>
					<input
						type="text"
						id="numTrainingDaysInput"
						name="numTrainingDays"
						value={userInfo.numTrainingDays}
						onChange={handleInputChange}
						className="form-control"
					></input>
				</label>
				<label htmlFor="squatInput" className="my-3 mx-4">
					<p>
						What are your marks in squat?
						<span style={{ color: "grey" }}>
							/ ¿Qué marcas manejas en sentadilla?
						</span>
					</p>
					<input
						type="text"
						id="squatInput"
						name="squat"
						value={userInfo.squat}
						onChange={handleInputChange}
						className="form-control"
						style={{ width: "25vw" }}
					></input>
				</label>
				<label htmlFor="benchPressInput" className="my-3 mx-4">
					<p>
						What are your marks in bench press?
						<span style={{ color: "grey" }}>
							/ ¿Qué marcas manejas en press banca?
						</span>
					</p>
					<input
						type="text"
						id="benchPressInput"
						name="benchPress"
						value={userInfo.benchPress}
						onChange={handleInputChange}
						className="form-control"
						style={{ width: "25vw" }}
					></input>
				</label>
				<label htmlFor="deadweightInput" className="my-3 mx-4">
					<p>
						What are your marks in deadweight?
						<span style={{ color: "grey" }}>
							/¿Cuáles son tus marcas en peso muerto?
						</span>
					</p>
					<input
						type="text"
						id="deadweightInput"
						name="deadweight"
						value={userInfo.deadweight}
						onChange={handleInputChange}
						className="form-control"
						style={{ width: "25vw" }}
					></input>
				</label>
				<h5 className="my-4 fw-bolder">
					AND LAST BUT NOT LEAST...{" "}
					<span style={{ color: "grey" }}>
						/ Y POR ÚLTIMO, ALGUNAS MEDIDAS MÁS...
					</span>
				</h5>
				<label htmlFor="heightInput" className="my-3 mx-4 d-block">
					<p>
						Height: <span style={{ color: "grey" }}>/ Altura (en cm):</span>
					</p>
					<input
						type="text"
						id="heightInput"
						name="height"
						value={userInfo.height}
						onChange={handleInputChange}
						className="form-control"
						style={{ width: "8vw" }}
					></input>
				</label>
				<label htmlFor="fatInput" className="my-3 mx-4 d-block">
					<p>
						% of fat (approximately){" "}
						<span style={{ color: "grey" }}>/ % de grasa aproximado:</span>
					</p>
					<input
						type="text"
						id="fatInput"
						name="fat"
						value={userInfo.fat}
						onChange={handleInputChange}
						className="form-control"
						style={{ width: "20vw" }}
					></input>
				</label>
				<label htmlFor="kcalInput" className="my-3 mx-4 d-block">
					<p>
						Kcal: <span style={{ color: "grey" }}>/ Kcal:</span>
					</p>
					<input
						type="text"
						id="kcalInput"
						name="kcal"
						value={userInfo.kcal}
						onChange={handleInputChange}
						className="form-control"
						style={{ width: "20vw" }}
					></input>
				</label>
				<label htmlFor="proteinsInput" className="my-3 mx-4 d-block">
					<p>
						Proteins per gram of weight:{" "}
						<span style={{ color: "grey" }}>
							/ Proteínas por gramo de peso:
						</span>
					</p>
					<input
						type="text"
						id="proteinsInput"
						name="proteins"
						value={userInfo.proteins}
						onChange={handleInputChange}
						className="form-control"
						style={{ width: "20vw" }}
					></input>
				</label>
				<label htmlFor="GInput" className="my-3 mx-4 d-block">
					<p>
						G per gram of weight:{" "}
						<span style={{ color: "grey" }}>/ G por gramo de peso:</span>
					</p>
					<input
						type="text"
						id="GInput"
						name="g"
						value={userInfo.g}
						onChange={handleInputChange}
						className="form-control"
						style={{ width: "20vw" }}
					></input>
				</label>
				<label htmlFor="chInput" className="my-3 mx-4 d-block">
					<p>
						Ch per gram of weight:{" "}
						<span style={{ color: "grey" }}>/ Ch por gramo de peso:</span>
					</p>
					<input
						type="text"
						id="chInput"
						name="ch"
						value={userInfo.ch}
						onChange={handleInputChange}
						className="form-control"
						style={{ width: "20vw" }}
					></input>
				</label>
				<label htmlFor="waterInput" className="my-3 mx-4 d-block">
					<p>
						How much water do you drink per day?
						<span style={{ color: "grey" }}>
							/ ¿Cuánta agua ingieres al día actualmente?
						</span>
					</p>
					<input
						type="text"
						id="waterInput"
						name="water"
						value={userInfo.water}
						onChange={handleInputChange}
						className="form-control"
						style={{ width: "20vw" }}
					></input>
				</label>
				<div className="text-center">
					<button type="submit" className="btn btn-dark btn-lg my-3">
						Sumbit / Enviar
					</button>
				</div>
			</form>
		</div>
	);
}

// {
//     date,
//     firstname,
//     lastname,
//     age,
//     email,
//     phone,
//     job,
//     jobHoursPerDay,
//     injuries,
//     nociveSubstances,
//     suplements,
//     rest,
//     nightWakeUps,
//     sleepEnvironment,
//     alergies,
//     carbohydratesFeeling,
//     prevTrainings,
//     objectives,
//     availability,
//     numTrainingDays,
//     squat,
//     benchPress,
//     deadweight,
//     height,
//     fat,
//     kcal,
//     proteins,
//     g,
//     water,
//     ch,
// }
