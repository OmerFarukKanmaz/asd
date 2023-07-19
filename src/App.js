import './App.css';
import LearningComponent from './components/learning-examples/LeaningComponent';
import Counter from './components/counter/Counter';

function App() {
  return (
    <div className="App">
      <Counter by={1} />
      <Counter by={2} />
      <Counter by={3} />
    </div>
  );
}





export default App;
