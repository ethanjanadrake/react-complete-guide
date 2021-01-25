import React from 'react';

import Person from './Person/Person';

// when refactoring to separated components, we had to change this.deletePersonHandler to props.clicked and this.nameChangedHandler to props.changed
// this will return a list of components next to each other which is fine and supported
const persons = (props) =>
	props.persons.map((person, index) => {
		return (
			<Person
				click={() => props.clicked(index)}
				name={person.name}
				age={person.age}
				key={person.id}
				changed={(event) => props.changed(event, person.id)}
			/>
		);
	});

export default persons;
