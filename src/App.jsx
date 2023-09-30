import './App.css';
import TitleScoreBar from './components/TitleScoreBar';
import ChoiceArea from './components/ChoiceArea';

function App() {
	return (
		<div className="container">
			<TitleScoreBar score="34" />
			<ChoiceArea />
		</div>
	);
}

export default App;
