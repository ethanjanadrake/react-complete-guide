import React, { Component } from 'react';

import classes from './App.css';
import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/Cockpit/Cockpit';

class App extends Component {
	constructor(props) {
		super(props);
	}

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

		if (this.state.showPersons) {
			persons = (
				<div>
					<Persons
						persons={this.state.persons}
						clicked={this.deletePersonHandler}
						changed={this.nameChangedHandler}
					/>
				</div>
			);
		}

		return (
			<div className={classes.App}>
				<Cockpit
					title={this.props.appTitle}
					showPersons={this.state.showPersons}
					persons={this.state.persons}
					clicked={this.togglePersonsHandler}
				/>
				{persons}
			</div>
		);
	}
}

export default App;
