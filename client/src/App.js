import logo from './logo.svg';
// import './App.css';
import './'
import Pins from './Pins'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Welcome to PINFINITY! Scroll to your heart's desire
        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <Pins/>
      </header>
    </div>
  );
}

export default App;
