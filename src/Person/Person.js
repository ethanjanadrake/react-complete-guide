import React from 'react';
// don't forget to npm install --save styled-components
import styled from 'styled-components';

// import './Person.css';

// this is a valid React component created by styled-components
const StyledDiv = styled.div`
	width: 60%;
	margin: 10px auto;
	border: 1px solid #eee;
	box-shadow: 0 2px 3px #ccc;
	padding: 16px;
	text-align: center;

	@media (min-width: 500px) {
		width: 450px;
	}
`;

const person = (props) => {
	const style = {
		'@media (min-width: 500px)' : {
			width : '450px'
		}
	};
	return (
		// <div className='Person' style={style}>
		<StyledDiv>
			<p onClick={props.click}>
				I'm {props.name} and I am {props.age} years old!
			</p>
			<p>{props.children}</p>
			<input type='text' onChange={props.changed} value={props.name} />
		</StyledDiv>
	);
};

export default person;
