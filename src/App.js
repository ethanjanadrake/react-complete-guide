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

	// using arrow functions allows THIS to refer to the class instead of the function
	togglePersonsHandler = () => {
		// change showPersons to the opposite of what it currently is
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

		// we wrapped the persons div in a ternary to toggle display of the div. you can't use block statements within jsx such as if statements but ternaries work.
		return (
			<div className='App'>
				<h1>Hi, I'm a React App</h1>
				<p>This is really working!</p>
				<button style={style} onClick={this.togglePersonsHandler}>
					Toggle Persons
				</button>
				{this.state.showPersons ? (
					<div>
						<Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
						<Person
							name={this.state.persons[1].name}
							age={this.state.persons[1].age}
							click={this.switchNameHandler.bind(this, 'Max!')}
							changed={this.nameChangedHandler}
						>
							My Hobbies: Racing
						</Person>
						<Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
					</div>
				) : null}
			</div>
		);
	}
}

export default App;
