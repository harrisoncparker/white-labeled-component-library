import React from "react";
import styled from 'styled-components';

const StyledButton = styled.button`
	display: inline-block;
	border-radius: 0;
	padding: 1rem;
	border: none;
	background-color: #eee;
	color: #222;
	
	&.inverted {
		background-color: #222;
		color: #eee;
	}
`;

const Button = props => {

	let className = 'button ';

	if (props.className) {
		className += props.className;
	}

	return (
		<StyledButton className={className}>{props.label}</StyledButton>
	);
};

export default Button;
