import React from "react";

export default function Profile() {
	const handleSubmit = (e) => {
		e.preventDefault();
		addProfile();
	};

	const addProfile = () => {};
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
				<label for="dateInput">
					<p>Fecha</p>
					<input type="date" id="dateInput"></input>
				</label>
				<label for="firstnameInput">
					<p>Nombre</p>
					<input type="text" id="firstnameInput" name="date"></input>
				</label>
				<label for="lastnameInput">
					<p>Apellidos</p>
					<input type="text" id="lastnameInput" name="lastname"></input>
				</label>
				<label for="ageInput">
					<p>Año de nacimiento</p>
					<input type="number" id="ageInput" name="age"></input>
				</label>
				<label for="emailInput">
					<p>Email</p>
					<input type="email" id="emailInput" name="email"></input>
				</label>
				<label for="phoneInput">
					<p>Móvil/Telf</p>
					<input type="text" id="phoneInput" name="phone"></input>
				</label>
				<h5>SALUD Y ESTILO DE VIDA</h5>
				<label for="jobInput">
					<p>¿A qué te dedicas?</p>
					<input type="text" id="jobInput" name="job"></input>
				</label>
				<label for="jobHoursPerDayInput">
					<p>¿Cuántas horas trabajas al día?</p>
					<input
						type="number"
						id="jobHoursPerDayInput"
						name="jobHoursPerDay"
					></input>
				</label>
				<label for="injuriesInput">
					<p>
						¿Has tenido alguna lesión previa / problemas médicos que puedan
						tener repercusiones en un programa de ejercicio?
					</p>
					<input type="text" id="injuriesInput" name="injuries"></input>
				</label>
				<label for="nociveSubstancesInput">
					<p>¿Fumas, bebes o tomas algún tipo de sustancia estupefaciente?</p>
					<input
						type="text"
						id="nociveSubstancesInput"
						name="nociveSubstances"
					></input>
				</label>
				<label for="suplementsInput">
					<p>
						¿Tomas en la actualidad algún suplemento deportivo o para tu salud?
					</p>
					<input type="text" id="suplementsInput" name="suplements"></input>
				</label>

				<h5>SUEÑO Y NUTRICIÓN</h5>
				<label for="restInput">
					<p>¿Duermes y descansas bien por la noche?</p>
					<input type="text" id="restInput" name="rest"></input>
				</label>
				<label for="nightWakeUpsInput">
					<p>¿Te levantas a media noche? Si es así, ¿cuántas veces?</p>
					<input type="text" id="nightWakeUpsInput" name="nightWakeUps"></input>
				</label>
				<label for="sleepEnvironmentInput">
					<p>¿Duermes con ruido, luz o aparatos electrónicos encendidos?</p>
					<input
						type="text"
						id="sleepEnvironmentInput"
						name="sleepEnvironment"
					></input>
				</label>
				<label for="alergiesInput">
					<p>¿Tienes alguna alergia o intolerancia a algún alimento?</p>
					<input type="text" id="alergiesInput" name="alergies"></input>
				</label>
				<label for="carbohydratesFeelingInput">
					<p>
						¿Cómo te sientes después de comer muchos carbohidratos?
						Especialmente productos con gluten / a base de trigo (ej: pasta,
						cereales etc) (Energizado, Somnoliento, Enfermo o Ningún efecto.)
					</p>
					<input
						type="text"
						id="carbohydratesFeelingInput"
						name="carbohydratesFeeling"
					></input>
				</label>
				<h5>Entrenamiento</h5>
				<label for="prevTrainingsInput">
					<p>¿Cómo has entrenado últimamente?</p>
					<input
						type="text"
						id="prevTrainingsInput"
						name="prevTrainings"
					></input>
				</label>
				<label for="objectivesInput">
					<p>¿Cuáles son tus objetivos?</p>
					<input type="text" id="objectivesInput" name="objectives"></input>
				</label>
				<label for="availabilityInput">
					<p>¿De cuánto tiempo dispones?</p>
					<input type="text" id="availabilityInput" name="availability"></input>
				</label>
				<label for="numTrainingDaysInput">
					<p>¿Cuántos días te gustaría entrenar?</p>
					<input
						type="text"
						id="numTrainingDaysInput"
						name="numTrainingDays"
					></input>
				</label>
				<label for="squatInput">
					<p>¿Qué marcas manejas en sentadilla?</p>
					<input type="text" id="squatInput" name="squat"></input>
				</label>
				<label for="benchPressInput">
					<p>¿Qué marcas manejas en press banca?</p>
					<input
						type="text"
						id="benchPressInput"
						name="phbenchPressone"
					></input>
				</label>
				<label for="deadweightInput">
					<p>¿Qué marcas manejas en peso muerto?</p>
					<input type="text" id="deadweightInput" name="deadweight"></input>
				</label>
				<h5>Y por último, algunas medidas más...</h5>
				<label for="heightInput">
					<p>Altura (en cm):</p>
					<input type="text" id="heightInput" name="height"></input>
				</label>
				<label for="fatInput">
					<p>% de grasa aproximado:</p>
					<input type="text" id="fatInput" name="fat"></input>
				</label>
				<label for="kcalInput">
					<p>Kcal:</p>
					<input type="text" id="kcalInput" name="kcal"></input>
				</label>
				<label for="proteinsInput">
					<p>Proteínas por gramo de peso:</p>
					<input type="text" id="proteinsInput" name="proteins"></input>
				</label>
				<label for="GInput">
					<p>G por gramo de peso:</p>
					<input type="text" id="GInput" name="G"></input>
				</label>
				<label for="waterInput">
					<p>¿Cuánta agua ingieres al día actualmente?</p>
					<input type="text" id="waterInput" name="water"></input>
				</label>
				<label for="chInput">
					<p>Ch por gramo de peso:</p>
					<input type="text" id="chInput" name="ch"></input>
				</label>
				<button type="button">Enviar</button>
			</form>
		</div>
	);
}
