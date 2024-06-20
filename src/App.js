import logo from './logo.svg';
import './App.css';
import GitHubCard from './components/GitHubCard';

function App() {
  return (
    <div className="App">
      <h2>Hello</h2>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          USER: TJSIV
        </p>
        <GitHubCard/>
        
      </header>
    </div>
  );
}

export default App;
 