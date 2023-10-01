import React from 'react';
import Button from './Button';

export default function ChoiceArea({ gameType, getUserChoice }) {
	return (
		<div className="choice-area">
			<div
				className={`choice-btns ${gameType === 'OG' ? 'original' : 'bonus'}`}
			>
				<Button
					config={{
						type: 'rock',
						color: 'hsl(349, 70%, 56%)',
						shadow: 'hsl(349, 70%, 36%)',
					}}
					getUserChoice={getUserChoice}
				/>
				<Button
					config={{
						type: 'paper',
						color: 'hsl(230, 89%, 62%) ',
						shadow: 'hsl(230, 89%, 42%) ',
					}}
					getUserChoice={getUserChoice}
				/>
				<Button
					config={{
						type: 'scissors',
						color: 'hsl(39, 89%, 49%)',
						shadow: 'hsl(39, 89%, 29%)',
					}}
					getUserChoice={getUserChoice}
				/>
			</div>
		</div>
	);
}
