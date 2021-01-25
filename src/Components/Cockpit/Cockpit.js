import React from 'react';

import classes from './Cockpit.css';

// we had to wrap this in a div because you can't have different components hardcoded next to each other in React (unless you implement a different method, explained later)
// we won't be able to access state from here, so we need to expect it to be passed to this component through props
const cockpit = (props) => {
	const assignedClasses = [];
	let btnClass = '';

	if (props.showPersons) {
		btnClass = classes.Red;
	}

	if (props.persons.length <= 2) {
		assignedClasses.push(classes.red);
	}
	if (props.persons.length <= 1) {
		assignedClasses.push(classes.bold);
	}

	return (
		<div className={classes.Cockpit}>
			<h1>{props.title}</h1>
			<p className={assignedClasses.join(' ')}>This is really working!</p>
			<button className={btnClass} onClick={props.clicked}>
				Toggle Persons
			</button>
		</div>
	);
};

export default cockpit;
