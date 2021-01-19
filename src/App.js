import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
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
			<div className='App'>
				<h1>Hi, I'm a React App</h1>
				<p>This is really working!</p>
				<Person />
				<Person />
				<Person />
			</div>
		);
	}
}

export default App;
