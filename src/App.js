import React, { Component } from 'react';

// we changed this line to be classes from
// note that there are a lot of other changes you need to make to your project to get this to work which involves changing the webpack
import classes from './App.css';
import Person from './Person/Person';

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

		if (this.state.showPersons) {
			persons = (
				<div>
					{this.state.persons.map((person, index) => {
						return (
							<Person
								click={() => this.deletePersonHandler(index)}
								name={person.name}
								age={person.age}
								key={person.id}
								changed={(event) => this.nameChangedHandler(event, person.id)}
							/>
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
