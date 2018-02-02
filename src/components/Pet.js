import React from 'react';

export default function Pet(props) {
	const name = props.adoptablePet.map(pet => pet.name);
	const url = props.adoptablePet.map(pet => pet.imageURL);
	const desc = props.adoptablePet.map(pet => pet.imageDescription);
	const sex = props.adoptablePet.map(pet => pet.sex); 
	const age = props.adoptablePet.map(pet => pet.age); 
	const breed = props.adoptablePet.map(pet => pet.breed); 
	const story = props.adoptablePet.map(pet => pet.story); 
	return(
		<section>
			<header>
				<h1>{name}</h1>
				<img src={url} alt={desc}/>
				</header>
			<main>
				<dl>
				<dt>Sex</dt>
				<dd>{sex}</dd>
				<dt>Age</dt>
				<dd>{age}</dd>
				<dt>Breed</dt>
				<dd>{breed}</dd>
				<dt>Story</dt>
				<dd>{story}</dd>
				</dl>
				<button onClick={props.handleAdopt}>
					Adopt!
				</button>
			</main>
		</section>
		)
}