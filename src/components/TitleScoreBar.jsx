import React from 'react';

export default function TitleScoreBar({ score }) {
	return (
		<div className="score-bar" style={{ marginBottom: '50px' }}>
			<div className="title">
				<h1>
					Rock
					<br />
					Paper
					<br />
					Scissors
				</h1>
			</div>
			<div className="score-container">
				<div className="score-label">
					<p>SCORE</p>
				</div>
				<div className="score">
					<p>{score}</p>
				</div>
			</div>
		</div>
	);
}
