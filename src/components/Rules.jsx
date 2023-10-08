import React from 'react';
import { useState } from 'react';

export default function Rules({ orignalGame }) {
	const [showModal, setShowModal] = useState(false);

	const handleModal = (state) => {
		setShowModal(state);
	};

	return (
		<>
			<button class="rules-btn" onClick={() => handleModal(true)}>
				RULES
			</button>

			{showModal && (
				<div>
					<div className="rules-modal-container">
						<h1>Rules</h1>
						<button onClick={() => handleModal(false)}>
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
					<div onClick={() => handleModal(false)} className="full-overlay" />
				</div>
			)}
		</>
	);
}
