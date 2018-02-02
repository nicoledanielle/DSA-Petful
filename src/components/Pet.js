import React from 'react';
import PropTypes from 'prop-types';

export default function Pet(props) {
	if (props.loading) {
		return (<div><h2>loading</h2></div>)
	}
	return(
		<section>
			<header>
				<h1>{props.name}</h1>
				<img src={props.url} alt={props.desc}/>
				</header>
			<main>
				<dl>
				<dt>Sex</dt>
				<dd>{props.sex}</dd>
				<dt>Age</dt>
				<dd>{props.age}</dd>
				<dt>Breed</dt>
				<dd>{props.breed}</dd>
				<dt>Story</dt>
				<dd>{props.story}</dd>
				</dl>
				<button onClick={props.handleAdopt}>
					Adopt!
				</button>
			</main>
		</section>
		)
}

Pet.propTypes = {name: PropTypes.string, url: PropTypes.string, des: PropTypes.string, sex: PropTypes.string, age: PropTypes.number, breed: PropTypes.string, story: PropTypes.string};