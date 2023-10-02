import React from 'react';
import Button from './Button';

export default function ChoiceArea({ gameType, getUserChoice }) {
	return (
		<div className="choice-area">
			<div
				className={`choice-btns ${gameType === 'OG' ? 'original' : 'bonus'}`}
			>
				<Button type="rock" getUserChoice={getUserChoice} />
				<Button type="paper" getUserChoice={getUserChoice} />
				<Button type="scissors" getUserChoice={getUserChoice} />
			</div>
		</div>
	);
}
