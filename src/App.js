import React, { Component } from 'react';

import classes from './App.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

class App extends Component {
	state = {
		persons     : [
			{ id: 'foij2', name: 'Max', age: 28 },
			{ id: 'f1pji', name: 'Manu', age: 29 },
			{ id: 'oaij2', name: 'Stephanie', age: 26 }
		],
		otherState  : 'some other value',
		showPersons : false
	};

	nameChangedHandler = (event, id) => {
		const personIndex = this.state.persons.findIndex((p) => {
			return p.id === id;
		});

		const person = { ...this.state.persons[personIndex] };

		person.name = event.target.value;

		const persons = [
			...this.state.persons
		];

		persons[personIndex] = person;

		this.setState({ persons: persons });
	};

	deletePersonHandler = (personIndex) => {
		const persons = [
			...this.state.persons
		];
		persons.splice(personIndex, 1);
		this.setState({ persons: persons });
	};

	togglePersonsHandler = () => {
		this.setState({ showPersons: !this.state.showPersons });
	};

	render() {
		let persons = null;
		let btnClass = [
			classes.Button
		];

		// we added the ErrorBoundary around the Person because that will now handle any errors that occur in that component. We moved the key to the ErrorBoundary element because it is now the outer element in a map method because that's the method that is actually replicated
		if (this.state.showPersons) {
			persons = (
				<div>
					{this.state.persons.map((person, index) => {
						return (
							<ErrorBoundary key={person.id}>
								<Person
									click={() => this.deletePersonHandler(index)}
									name={person.name}
									age={person.age}
									changed={(event) => this.nameChangedHandler(event, person.id)}
								/>
							</ErrorBoundary>
						);
					})}
				</div>
			);

			btnClass.push(classes.Red);
		}

		// changed the name of this variable so it didn't conflict with the classes variable we are using with CSS Modules
		const assignedClasses = [];
		if (this.state.persons.length <= 2) {
			assignedClasses.push(classes.red);
		}
		if (this.state.persons.length <= 1) {
			assignedClasses.push(classes.bold);
		}

		return (
			<div className={classes.App}>
				<h1>Hi, I'm a React App</h1>
				<p className={assignedClasses.join(' ')}>This is really working!</p>
				{/* changed here to set className to classes.Button due to working with CSS Modules */}
				<button className={btnClass.join(' ')} onClick={this.togglePersonsHandler}>
					Toggle Persons
				</button>
				{persons}
			</div>
		);
	}
}

export default App;
