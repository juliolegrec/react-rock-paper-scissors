import React from 'react';
import styled from 'styled-components';

const colors = {
	rock: {
		color: 'hsl(349, 70%, 56%)',
		shadow: 'hsl(349, 70%, 36%)',
	},
	paper: {
		color: 'hsl(230, 89%, 62%) ',
		shadow: 'hsl(230, 89%, 42%) ',
	},
	scissors: {
		color: 'hsl(39, 89%, 49%)',
		shadow: 'hsl(39, 89%, 29%)',
	},
};

const GuessButton = styled.button`
	${(props) => {
		return `
			background-image: url(./images/icon-${props.type}.svg);
			background-repeat: no-repeat;
			background-position: center center;
			background-size: 50%;
			background-color: white;
			border: 20px solid ${
				colors[props.type] ? colors[props.type].color : 'hsl(216, 79%, 91%)'
			};
			border-radius: 100%;
			padding: 80px;
			aspect-ratio: 1 / 1; 
			cursor: pointer;
			width: 30%;
			box-shadow: inset 0 8px rgba(0, 0, 0, 0.1), 0 8px 0 ${
				colors[props.type] ? colors[props.type].shadow : 'hsl(216, 79%, 71%)'
			};

			&:enabled:active {
				box-shadow: none;
				transform: translateY(8px);
			}

      &:disabled {
        cursor: initial;
      }
		`;
	}}
`;

export default function Button({ className, type, getUserChoice, disabled }) {
	function handleInput(e) {
		// console.log(e.currentTarget.value);
		getUserChoice(e.currentTarget.value);
	}

	return (
		<GuessButton
			className={className}
			value={type}
			disabled={disabled}
			type={type}
			onClick={(e) => handleInput(e)}
		/>
	);
}
