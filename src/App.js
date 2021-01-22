import React, { Component } from 'react';
import './App.css';
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
		// find the index of the specified id that was sent to us by the function call
		const personIndex = this.state.persons.findIndex((p) => {
			return p.id === id;
		});

		// copy the person object with the given id
		const person = { ...this.state.persons[personIndex] };

		// set the name of the person to the textbox where the event was triggered from
		person.name = event.target.value;

		// copy the entire persons array from the class (this will contain the old info)
		const persons = [
			...this.state.persons
		];

		// change the old info to the new info using the known index to replace it
		persons[personIndex] = person;

		// update the state
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
		const style = {
			backgroundColor : 'green',
			font            : 'inherit',
			border          : '1px solid blue',
			padding         : '8px',
			cursor          : 'pointer'
		};

		let persons = null;

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
								// remember that Person.js has this as an onChange event. we take the event and use it to trigger nameChangedHandler with the id of the person it's attached to.
								changed={(event) => this.nameChangedHandler(event, person.id)}
							/>
						);
					})}
				</div>
			);

			style.backgroundColor = 'red';
		}

		const classes = [];
		if (this.state.persons.length <= 2) {
			classes.push('red'); //classes = ['red']
		}
		if (this.state.persons.length <= 1) {
			classes.push('bold'); //classes = ['red','bold']
		}

		return (
			<div className='App'>
				<h1>Hi, I'm a React App</h1>
				<p className={classes.join(' ')}>This is really working!</p>
				<button style={style} onClick={this.togglePersonsHandler}>
					Toggle Persons
				</button>
				{persons}
			</div>
		);
	}
}

export default App;
