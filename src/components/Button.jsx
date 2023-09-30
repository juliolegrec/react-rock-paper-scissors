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
			background-color: white;
			border: 20px solid ${props.color};
			border-radius: 100%;
			padding: 20px;
			aspect-ratio: 1/1;
			width: 10rem;
			cursor: pointer;
			box-shadow: inset 0 8px rgba(0, 0, 0, 0.1), 0 8px 0 ${props.shadow};

			&:active {
				box-shadow: none;
				transform: translateY(8px);
			}
		`;
	}}
`;

export default function Button({ config }) {
	function handleInput(e) {
		console.log(e.currentTarget.value);
	}

	return (
		<GuessButton
			color={config.color}
			shadow={config.shadow}
			value={config.type}
			onClick={(e) => handleInput(e)}
		>
			<img src={`./images/icon-${config.type}.svg`} alt="guess-icon" />
		</GuessButton>
	);
}
