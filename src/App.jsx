import React, { useState } from 'react';
import './App.css';
import TitleScoreBar from './components/TitleScoreBar';
import ChoiceArea from './components/ChoiceArea';
import FaceOff from './components/FaceOff';

const choices = ['rock', 'paper', 'scissors'];

const App = () => {
	const [userChoice, setUserChoice] = useState(null);
	const [computerChoice, setComputerChoice] = useState(null);
	const [result, setResult] = useState(null);
	const [score, setScore] = useState(0);

	const generateComputerChoice = () => {
		const randomIndex = Math.floor(Math.random() * choices.length);
		return choices[randomIndex];
	};

	const determineWinner = (user, computer) => {
		if (user === computer) return "It's a tie!";
		if (
			(user === 'rock' && computer === 'scissors') ||
			(user === 'paper' && computer === 'rock') ||
			(user === 'scissors' && computer === 'paper')
		) {
			setScore(score + 1);
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

	const reset = () => {
		setComputerChoice(null);
	};

	return (
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
				// <div>
				// 	<h1>{result}</h1>
				// 	<button onClick={() => setComputerChoice(null)}>Play Again</button>
				// </div>
			)}

			{/* <div>
				<button onClick={() => handleUserChoice('rock')}>Rock</button>
				<button onClick={() => handleUserChoice('paper')}>Paper</button>
				<button onClick={() => handleUserChoice('scissors')}>Scissors</button>
			</div>
			{userChoice && (
				<div>
					<p>Your choice: {userChoice}</p>
					<p>Computer's choice: {computerChoice}</p>
					<p>{result}</p>
				</div>
			)} */}
		</div>
	);
};

export default App;

// import './App.css';
// import TitleScoreBar from './components/TitleScoreBar';
// import ChoiceArea from './components/ChoiceArea';
// import { useEffect, useState } from 'react';

// function App() {
// 	const orignalChoices = ['rock', 'paper', 'scissors'];
// 	const bonusChoices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

// 	const [computerChoice, setComputerChoice] = useState('');
// 	const [userChoice, setUserChoice] = useState('');

// 	useEffect(() => {
// 		setComputerChoice(
// 			orignalChoices[Math.floor(Math.random() * orignalChoices.length)]
// 		);
// 	}, [userChoice]);

// 	const getUserChoice = () => setUserChoice('paper');

// 	console.log({ computerChoice, userChoice });

// 	return (
// 		<div className="container">
// 			<TitleScoreBar score="0" />
// 			<ChoiceArea gameType="OG" getUserChoice={getUserChoice} />
// 		</div>
// 	);
// }

// export default App;
