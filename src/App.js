import './App.css';
import NameState from './context/NameState';
import Home from './component/Home';

function App() {
  return (
    <NameState>
      <Home />
    </NameState>
  );
}

export default App;
