import React, { useState } from 'react';
import './App.css';
import TitleScoreBar from './components/TitleScoreBar';
import ChoiceArea from './components/ChoiceArea';
import FaceOff from './components/FaceOff';
import Modal from './components/Modal';

const choices = ['rock', 'paper', 'scissors'];

function App() {
	const [userChoice, setUserChoice] = useState(null);
	const [computerChoice, setComputerChoice] = useState(null);
	const [result, setResult] = useState(null);
	const [score, setScore] = useState(0);

	const [showModal, setShowModal] = useState(false);

	const generateComputerChoice = () => {
		const randomIndex = Math.floor(Math.random() * choices.length);
		return choices[randomIndex];
	};

	const determineWinner = (user, computer) => {
		if (user === computer) return 'tie';
		if (
			(user === 'rock' && computer === 'scissors') ||
			(user === 'paper' && computer === 'rock') ||
			(user === 'scissors' && computer === 'paper')
		) {
			setTimeout(() => {
				setScore(score + 1);
			}, 2000);
			return 'You win';
		} else {
			return 'You lose';
		}
	};

	const handleUserChoice = (choice) => {
		const computerChoice = generateComputerChoice();
		setUserChoice(choice);
		setComputerChoice(computerChoice);
		const result = determineWinner(choice, computerChoice);
		setResult(result);
	};

	const handleModal = (state) => {
		setShowModal(state);
	};

	const reset = () => {
		setComputerChoice(null);
	};

	return (
		<>
			<div className="container">
				<TitleScoreBar score={score} />

				{!computerChoice && (
					<ChoiceArea gameType="OG" getUserChoice={handleUserChoice} />
				)}

				{computerChoice && (
					<FaceOff
						userChoice={userChoice}
						computerChoice={computerChoice}
						result={result}
						reset={reset}
					/>
				)}
			</div>

			<button class="rules-btn" onClick={() => handleModal(true)}>
				RULES
			</button>

			{showModal && (
				<Modal orignalGame={true} closeModal={() => handleModal(false)} />
			)}
		</>
	);
}

export default App;
