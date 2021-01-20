import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
	// state is a reserved word
	state = {
		persons    : [
			{ name: 'Max', age: 28 },
			{ name: 'Manu', age: 29 },
			{ name: 'Stephanie', age: 26 }
		],
		otherState : 'some other value'
	};

	// usually use Handler naming convention for a function that is not called by the developer directly, but an event handler instead
	switchNameHandler = () => {
		// DON'T DO THIS:
		// this.state.persons[0] = 'Maximillian';
		this.setState({
			persons : [
				{ name: 'Maximilian', age: 28 },
				{ name: 'Manu', age: 29 },
				{ name: 'Stephanie', age: 27 }
			]
		});
	};

	render() {
		// React.createElement()
		// 1. element you want to create
		// 2. add any className
		// 3. add any children
		// however this method is cumbersome, therefore we use jsx, which is a markup equivalent to this (which is why we still need to import React)
		// return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Does this work now?'));

		// this is jsx. it gets compiled into the code seen above, but is much easier to read and looks almost identical to html in formatting
		return (
			// can't use the keyword class because it's reserved in js. therefore we have to change the keyname to className. this WILL be translated into "class" in CSS in the end, however
			// with this method, we need one root element, so we can't return two adjacent elements without nesting in one div
			// onClick is a property that holds a click event. you then call a function without parens to tell the event which function to run on click
			<div className='App'>
				<h1>Hi, I'm a React App</h1>
				<p>This is really working!</p>
				<button onClick={this.switchNameHandler}>Switch Name</button>
				{/* 
				// the following uses the object properties method, but then another method is shown for using the state keyword
				<Person name='Max' age='28' />
				<Person name='Manu' age='29'>
					My Hobbies: Racing
				</Person>
				<Person name='Stephanie' age='26' /> */}
				<Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
				<Person name={this.state.persons[1].name} age={this.state.persons[1].age}>
					My Hobbies: Racing
				</Person>
				<Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
			</div>
		);
	}
}

export default App;
