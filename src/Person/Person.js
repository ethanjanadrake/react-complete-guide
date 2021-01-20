import React from 'react';

// props are all the properties passed in through the jsx
// if you are using class-based components (like when you do class Person extends Component{}), you would use this.props.name instead of props.name
// you don't need to pass children into the arguments. it refers to anything in-between opening and closing tags
const person = (props) => {
	return (
		<div>
			<p onClick={props.click}>
				I'm {props.name} and I am {props.age} years old!
			</p>
			<p>{props.children}</p>
		</div>
	);
};

export default person;
