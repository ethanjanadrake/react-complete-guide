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

	nameChangedHandler = (event) => {
		this.setState({
			persons : [
				{ name: 'Max', age: 28 },
				{ name: event.target.value, age: 29 },
				{ name: 'Stephanie', age: 26 }
			]
		});
	};

	deletePersonHandler = (personIndex) => {
		// copy the persons array (using spread)
		const persons = [
			...this.state.persons
		];
		// remove the item with the matching index from the array
		persons.splice(personIndex, 1);
		// rewrite the array
		this.setState({ persons: persons });
	};

	togglePersonsHandler = () => {
		this.setState({ showPersons: !this.state.showPersons });
	};

	render() {
		const style = {
			backgroundColor : 'white',
			font            : 'inherit',
			border          : '1px solid blue',
			padding         : '8px',
			cursor          : 'pointer'
		};

		let persons = null;

		// here we used map to step through an array and create a group of objects with replaceable parts. notice that person represents each object in the list so for each item we have access to the object's .name and .age.
		// the index is passed automatically as the second argument. we just have to grab it. we then pass it into deletePersonsHandler
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
							/>
						);
					})}
				</div>
			);
		}

		return (
			<div className='App'>
				<h1>Hi, I'm a React App</h1>
				<p>This is really working!</p>
				<button style={style} onClick={this.togglePersonsHandler}>
					Toggle Persons
				</button>
				{persons}
			</div>
		);
	}
}

export default App;
