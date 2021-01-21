import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
	state = {
		persons     : [
			{ name: 'Max', age: 28 },
			{ name: 'Manu', age: 29 },
			{ name: 'Stephanie', age: 26 }
		],
		otherState  : 'some other value',
		showPersons : false
	};

	switchNameHandler = (newName) => {
		this.setState({
			persons : [
				{ name: newName, age: 28 },
				{ name: 'Manu', age: 29 },
				{ name: 'Stephanie', age: 27 }
			]
		});
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
		if (this.state.showPersons) {
			persons = (
				<div>
					{this.state.persons.map((person) => {
						return <Person name={person.name} age={person.age} />;
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
