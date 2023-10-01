import React from 'react';
import styled from 'styled-components';

// BUTTON INSTANCE EXAMPLE
/*
<Button
	config={{
		type: 'rock',
		color: 'hsl(349, 70%, 56%)',
		shadow: 'hsl(349, 70%, 36%)',
	}}
/>; 
*/

const GuessButton = styled.button`
	${(props) => {
		return `
			background-image: url(./images/icon-${props.type}.svg);
			background-repeat: no-repeat;
			background-position: center center;
			background-size: 50%;
			background-color: white;
			border: 20px solid ${props.color};
			border-radius: 100%;
			padding: 80px;
			aspect-ratio: 1 / 1; 
			cursor: pointer;
			width: 30%;
			box-shadow: inset 0 8px rgba(0, 0, 0, 0.1), 0 8px 0 ${props.shadow};

			&:active {
				box-shadow: none;
				transform: translateY(8px);
			}
		`;
	}}
`;

export default function Button({ config, getUserChoice }) {
	function handleInput(e) {
		// console.log(e.currentTarget.value);
		getUserChoice(e.currentTarget.value);
	}

	return (
		<GuessButton
			type={config.type}
			color={config.color}
			shadow={config.shadow}
			value={config.type}
			onClick={(e) => handleInput(e)}
		/>
	);
}
