import './App.css';
import Button from './components/Button';

function App() {
	return (
		<>
			<Button
				config={{
					type: 'rock',
					color: 'hsl(349, 70%, 56%)',
					shadow: 'hsl(349, 70%, 36%)',
				}}
			/>
			<Button
				config={{
					type: 'paper',
					color: 'hsl(230, 89%, 65%)',
					shadow: 'hsl(230, 89%, 45%)',
				}}
			/>
			<Button
				config={{
					type: 'scissors',
					color: 'hsl(39, 89%, 49%)',
					shadow: 'hsl(39, 89%, 29%)',
				}}
			/>
		</>
	);
}

export default App;
