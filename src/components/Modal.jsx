import React from 'react';

export default function Modal({ orignalGame, closeModal }) {
	return (
		<>
			<div className="rules-modal-container">
				<h1>Rules</h1>
				<button onClick={closeModal}>
					<img src="/images/icon-close.svg" alt="close-icon" />
				</button>
				{orignalGame ? (
					<img
						src="/images/original_rules_diagram.svg"
						alt="original-rules-diagram"
					/>
				) : (
					<img
						src="/images/bonus_rules_diagram.svg"
						alt="bonus-rules-diagram"
					/>
				)}
			</div>
			<div onClick={closeModal} className="full-overlay" />
		</>
	);
}
