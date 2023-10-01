import './App.css';
import TitleScoreBar from './components/TitleScoreBar';
import ChoiceArea from './components/ChoiceArea';
import { useEffect, useState } from 'react';

function App() {
	const orignalChoices = ['rock', 'paper', 'scissors'];
	const bonusChoices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

	const [computerChoice, setComputerChoice] = useState('');
	const [userChoice, setUserChoice] = useState('');

	useEffect(() => {
		setComputerChoice(
			orignalChoices[Math.floor(Math.random() * orignalChoices.length)]
		);
	}, [userChoice]);

	const getUserChoice = () => setUserChoice('paper');

	console.log({ computerChoice, userChoice });

	return (
		<div className="container">
			<TitleScoreBar score="0" />
			<ChoiceArea gameType="OG" getUserChoice={getUserChoice} />
		</div>
	);
}

export default App;
