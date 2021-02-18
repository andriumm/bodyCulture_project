import React from "react";
import { useState, useEffect } from "react";

export default function Profile() {
	// create a use state for each field
	const [userInfo, setUserInfo] = useState({
		date: "",
		firstname: "",
		lastname: "",
		age: 0,
		email: "",
		phone: "",
		job: "",
		jobHoursPerDay: "",
		injuries: "",
		nociveSubstances: "",
		suplements: "",
		rest: "",
		nightWakeUps: "",
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
		height: "",
		fat: "",
		kcal: "",
		proteins: "",
		g: "",
		water: "",
		ch: "",
	});

	// useEffect(() => {
	//     return () => {
	//         //here I'd like to change the interface so the user only sees a confirmation message.
	//         console.log({message: "The form has been sent"})
	//     }
	// }, [handleSubmit]);

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
	const addProfile = () => {
		fetch("/users", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ userInfo }),
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
			<h3>Perfil Inicial</h3>
			<p>
				Antes de responder el cuestionario, ten en cuenta que aquí no hay
				respuestas correctas o incorrectas – simplemente debes ser completamente
				sincero/a para que pueda ayudarte de la mejor manera a conseguir tus
				metas.
			</p>
			<form onSubmit={handleSubmit}>
				<label htmlFor="dateInput">
					<p>Fecha (yyyy-mm-dd)</p>
					<input
						type="text"
						id="dateInput"
						name="date"
						value={userInfo.date}
						onChange={handleInputChange}
					></input>
				</label>
				<label htmlFor="firstnameInput">
					<p>Nombre</p>
					<input
						type="text"
						id="firstnameInput"
						name="firstname"
						value={userInfo.firstname}
						onChange={handleInputChange}
					></input>
				</label>
				<label htmlFor="lastnameInput">
					<p>Apellidos</p>
					<input
						type="text"
						id="lastnameInput"
						name="lastname"
						value={userInfo.lastname}
						onChange={handleInputChange}
					></input>
				</label>
				<label htmlFor="ageInput">
					<p>Año de nacimiento</p>
					<input
						type="number"
						id="ageInput"
						name="age"
						value={userInfo.age}
						onChange={handleInputChange}
					></input>
				</label>
				<label htmlFor="emailInput">
					<p>Email</p>
					<input
						type="email"
						id="emailInput"
						name="email"
						value={userInfo.email}
						onChange={handleInputChange}
					></input>
				</label>
				<label htmlFor="phoneInput">
					<p>Móvil/Telf</p>
					<input
						type="text"
						id="phoneInput"
						name="phone"
						value={userInfo.phone}
						onChange={handleInputChange}
					></input>
				</label>
				<h5>SALUD Y ESTILO DE VIDA</h5>
				<label htmlFor="jobInput">
					<p>¿A qué te dedicas?</p>
					<input
						type="text"
						id="jobInput"
						name="job"
						value={userInfo.job}
						onChange={handleInputChange}
					></input>
				</label>
				<label htmlFor="jobHoursPerDayInput">
					<p>¿Cuántas horas trabajas al día?</p>
					<input
						type="number"
						id="jobHoursPerDayInput"
						name="jobHoursPerDay"
						value={userInfo.jobHoursPerDay}
						onChange={handleInputChange}
					></input>
				</label>
				<label htmlFor="injuriesInput">
					<p>
						¿Has tenido alguna lesión previa / problemas médicos que puedan
						tener repercusiones en un programa de ejercicio?
					</p>
					<input
						type="text"
						id="injuriesInput"
						name="injuries"
						value={userInfo.injuries}
						onChange={handleInputChange}
					></input>
				</label>
				<label htmlFor="nociveSubstancesInput">
					<p>¿Fumas, bebes o tomas algún tipo de sustancia estupefaciente?</p>
					<input
						type="text"
						id="nociveSubstancesInput"
						name="nociveSubstances"
						value={userInfo.nociveSubstances}
						onChange={handleInputChange}
					></input>
				</label>
				<label htmlFor="suplementsInput">
					<p>
						¿Tomas en la actualidad algún suplemento deportivo o para tu salud?
					</p>
					<input
						type="text"
						id="suplementsInput"
						name="suplements"
						value={userInfo.suplements}
						onChange={handleInputChange}
					></input>
				</label>

				<h5>SUEÑO Y NUTRICIÓN</h5>
				<label htmlFor="restInput">
					<p>¿Duermes y descansas bien por la noche?</p>
					<input
						type="text"
						id="restInput"
						name="rest"
						value={userInfo.rest}
						onChange={handleInputChange}
					></input>
				</label>
				<label htmlFor="nightWakeUpsInput">
					<p>¿Te levantas a media noche? Si es así, ¿cuántas veces?</p>
					<input
						type="text"
						id="nightWakeUpsInput"
						name="nightWakeUps"
						value={userInfo.nightWakeUps}
						onChange={handleInputChange}
					></input>
				</label>
				<label htmlFor="sleepEnvironmentInput">
					<p>¿Duermes con ruido, luz o aparatos electrónicos encendidos?</p>
					<input
						type="text"
						id="sleepEnvironmentInput"
						name="sleepEnvironment"
						value={userInfo.sleepEnvironment}
						onChange={handleInputChange}
					></input>
				</label>
				<label htmlFor="alergiesInput">
					<p>¿Tienes alguna alergia o intolerancia a algún alimento?</p>
					<input
						type="text"
						id="alergiesInput"
						name="alergies"
						value={userInfo.alergies}
						onChange={handleInputChange}
					></input>
				</label>
				<label htmlFor="carbohydratesFeelingInput">
					<p>
						¿Cómo te sientes después de comer muchos carbohidratos?
						Especialmente productos con gluten / a base de trigo (ej: pasta,
						cereales etc) (Energizado, Somnoliento, Enfermo o Ningún efecto.)
					</p>
					<input
						type="text"
						id="carbohydratesFeelingInput"
						name="carbohydratesFeeling"
						value={userInfo.carbohydratesFeeling}
						onChange={handleInputChange}
					></input>
				</label>
				<h5>Entrenamiento</h5>
				<label htmlFor="prevTrainingsInput">
					<p>¿Cómo has entrenado últimamente?</p>
					<input
						type="text"
						id="prevTrainingsInput"
						name="prevTrainings"
						value={userInfo.prevTrainings}
						onChange={handleInputChange}
					></input>
				</label>
				<label htmlFor="objectivesInput">
					<p>¿Cuáles son tus objetivos?</p>
					<input
						type="text"
						id="objectivesInput"
						name="objectives"
						value={userInfo.objectives}
						onChange={handleInputChange}
					></input>
				</label>
				<label htmlFor="availabilityInput">
					<p>¿De cuánto tiempo dispones?</p>
					<input
						type="text"
						id="availabilityInput"
						name="availability"
						value={userInfo.availability}
						onChange={handleInputChange}
					></input>
				</label>
				<label htmlFor="numTrainingDaysInput">
					<p>¿Cuántos días te gustaría entrenar?</p>
					<input
						type="text"
						id="numTrainingDaysInput"
						name="numTrainingDays"
						value={userInfo.numTrainingDays}
						onChange={handleInputChange}
					></input>
				</label>
				<label htmlFor="squatInput">
					<p>¿Qué marcas manejas en sentadilla?</p>
					<input
						type="text"
						id="squatInput"
						name="squat"
						value={userInfo.squat}
						onChange={handleInputChange}
					></input>
				</label>
				<label htmlFor="benchPressInput">
					<p>¿Qué marcas manejas en press banca?</p>
					<input
						type="text"
						id="benchPressInput"
						name="benchPress"
						value={userInfo.benchPress}
						onChange={handleInputChange}
					></input>
				</label>
				<label htmlFor="deadweightInput">
					<p>¿Qué marcas manejas en peso muerto?</p>
					<input
						type="text"
						id="deadweightInput"
						name="deadweight"
						value={userInfo.deadweight}
						onChange={handleInputChange}
					></input>
				</label>
				<h5>Y por último, algunas medidas más...</h5>
				<label htmlFor="heightInput">
					<p>Altura (en cm):</p>
					<input
						type="text"
						id="heightInput"
						name="height"
						value={userInfo.height}
						onChange={handleInputChange}
					></input>
				</label>
				<label htmlFor="fatInput">
					<p>% de grasa aproximado:</p>
					<input
						type="text"
						id="fatInput"
						name="fat"
						value={userInfo.fat}
						onChange={handleInputChange}
					></input>
				</label>
				<label htmlFor="kcalInput">
					<p>Kcal:</p>
					<input
						type="text"
						id="kcalInput"
						name="kcal"
						value={userInfo.kcal}
						onChange={handleInputChange}
					></input>
				</label>
				<label htmlFor="proteinsInput">
					<p>Proteínas por gramo de peso:</p>
					<input
						type="text"
						id="proteinsInput"
						name="proteins"
						value={userInfo.proteins}
						onChange={handleInputChange}
					></input>
				</label>
				<label htmlFor="GInput">
					<p>G por gramo de peso:</p>
					<input
						type="text"
						id="GInput"
						name="g"
						value={userInfo.g}
						onChange={handleInputChange}
					></input>
				</label>
				<label htmlFor="waterInput">
					<p>¿Cuánta agua ingieres al día actualmente?</p>
					<input
						type="text"
						id="waterInput"
						name="water"
						value={userInfo.water}
						onChange={handleInputChange}
					></input>
				</label>
				<label htmlFor="chInput">
					<p>Ch por gramo de peso:</p>
					<input
						type="text"
						id="chInput"
						name="ch"
						value={userInfo.ch}
						onChange={handleInputChange}
					></input>
				</label>
				<button type="submit">Enviar</button>
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
