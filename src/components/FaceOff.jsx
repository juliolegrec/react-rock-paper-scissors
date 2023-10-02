import React from 'react';
import Button from './Button';
import { useState } from 'react';

export default function FaceOff({ userChoice, computerChoice, result, reset }) {
	const [waitTime, setWaitTime] = useState(true);
	setTimeout(() => {
		setWaitTime(false);
	}, 1000);

	return (
		<div>
			<div className="pick-container">
				<div className="user-pick">
					<h2>You picked</h2>
					<Button type={userChoice} disabled={true} />
				</div>
				<div className="house-pick">
					<h2>The House picked</h2>
					{waitTime ? (
						<div className="placeholder-pick animate__animated animate__pulse animate__infinite"></div>
					) : (
						<Button
							className="animate__animated animate__zoomIn"
							type={computerChoice}
							disabled={true}
						/>
					)}
				</div>
			</div>

			<h1>{result}</h1>
			<button onClick={() => reset(null)}>Play Again</button>
		</div>
	);
}
