import React from 'react';
import Button from './Button';

export default function ChoiceArea({ bonusGame, getUserChoice }) {
	return (
		<div className={`choice-area ${bonusGame ? 'bonus' : 'original'}`}>
			<Button
				className="choice-btn"
				type={!bonusGame ? 'rock' : 'scissors'}
				getUserChoice={getUserChoice}
			/>
			<Button
				className="choice-btn"
				type={!bonusGame ? 'paper' : 'spock'}
				getUserChoice={getUserChoice}
			/>
			<Button
				className="choice-btn"
				type={!bonusGame ? 'scissors' : 'paper'}
				getUserChoice={getUserChoice}
			/>
			{bonusGame && (
				<>
					<Button
						className="choice-btn"
						type="lizard"
						getUserChoice={getUserChoice}
					/>
					<Button
						className="choice-btn"
						type="rock"
						getUserChoice={getUserChoice}
					/>
				</>
			)}
		</div>
	);
}
