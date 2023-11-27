import React from 'react';
import Button from './Button';
import { useState } from 'react';

export default function FaceOff({ userChoice, computerChoice, result, reset }) {
	const [waitTime, setWaitTime] = useState(true);
	setTimeout(() => {
		setWaitTime(false);
	}, 750);

	return (
		<div className="picks-container">
			<div className="pick-container user-pick">
				<Button className="result-btn" type={userChoice} disabled={true} />
				<h2>You picked</h2>
			</div>
			<div className="pick-container house-pick">
				{waitTime ? (
					<div className="placeholder-pick animate__animated animate__pulse animate__infinite"></div>
				) : (
					<Button
						className="result-btn animate__animated animate__zoomIn"
						type={computerChoice}
						disabled={true}
					/>
				)}
				<h2>The House picked</h2>
			</div>
			<div className="result-container result animate__animated animate__bounceIn animate__delay-1s">
				<h1>{result}</h1>
				<button
					className="animate__animated animate__fadeIn animate__delay-2s"
					onClick={() => reset(null)}
				>
					Play Again
				</button>
			</div>
		</div>
	);
}
