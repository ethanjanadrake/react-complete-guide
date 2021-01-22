import React, { Component } from 'react';
// don't forget to npm install Radium
import Radium from 'radium';

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
		// the colon makes the key an invalid property, so when using Radium we have to put it in quotation marks
		const style = {
			backgroundColor : 'green',
			font            : 'inherit',
			border          : '1px solid blue',
			padding         : '8px',
			cursor          : 'pointer',
			':hover'        : {
				backgroundColor : 'lightgreen',
				color           : 'black'
			}
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
								changed={(event) => this.nameChangedHandler(event, person.id)}
							/>
						);
					})}
				</div>
			);

			style.backgroundColor = 'red';
			// this is how you would change the Radium pseudoselector's behavior. the square brackets identify the key just like they would for any js object
			style[':hover'] = {
				backgroundColor : 'salmon',
				color           : 'black'
			};
		}

		const classes = [];
		if (this.state.persons.length <= 2) {
			classes.push('red');
		}
		if (this.state.persons.length <= 1) {
			classes.push('bold');
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

// "higher order component" just a component wrapping your component which will understand some extra features
export default Radium(App);
