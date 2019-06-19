import React from "react";
import '../../styles/app.scss';
import SVG from 'react-inlinesvg';
import styled from 'styled-components';

const StyledButton = styled.button`

	/**
	Variables
	 */
	--grey-mid: ${props => props.theme.greyMid};
	--grey-light: ${props => props.theme.greyLight};
	
	/**
	Core
	 */
	text-align: center;
	display: inline-block;
	border-radius: 0;
	padding: 14px;
	font-size: 16px;
	border: 1px solid var(--grey-mid);
	background-color: white;
	color: var(--grey-mid);
	font-weight: 300;
	width: 260px;
	cursor: pointer;
	text-decoration: none;
	line-height: 1.5;
	letter-spacing: 1px;
	transition: .1s ease-out;
	
	&:hover{ 
		background-color: var(--grey-mid);
		color: var(--grey-light);
	}
	
	/**
	Icon
	 */
	.button__icon {
		display: inline-block;
		width: 16px;
		height: 16px;
		margin-right: .5rem;
		transform: translateY(3px);
		
		svg {
			transition: .1s ease-out;
			width: 100%;
			height: 100%;
			fill: var(--grey-mid);
			stroke: var(--grey-mid);
		}
	}
	
	&:hover {
		.button__icon {
			svg {
				fill: var(--grey-light);
				stroke: var(--grey-light);
			}
		}
	}
	
	/**
	Loading
	 */
	&.loading {
		position: relative;
		cursor: default;
		pointer-events: none;
	
		&::after {
			box-sizing: border-box;
			content: '';
			display: inline-block;
			width: 14px;
			height: 14px;
			border-top: 1px solid var(--grey-mid);
			border-left: 1px solid var(--grey-mid);
			border-bottom: 1px solid var(--grey-mid);
			border-right: 1px solid white;
			border-radius: 50%;
			margin-left: .5rem;
			animation: 1s linear infinite rotate;
		}
		&:hover{ 
			background-color: white;
			color: var(--grey-mid);
		}
	}
	
	@keyframes rotate {
		from {
			transform: rotate(0deg)
		}
		to {
			transform: rotate(360deg)
		}
	}
`;

const Button = props => {

	let className = 'button ';

	if (props.className) {
		className += props.className;
	}

	let icon = '';
	if (props.iconPath) {
		icon = <SVG className={`button__icon`} src={props.iconPath}/>;
	}

	if (props.href) {
		return <StyledButton as="a" href={props.href} className={className}>{icon}{props.label}</StyledButton>
	}

	return <StyledButton className={className}>{icon}{props.label}</StyledButton>
};

export default Button;
