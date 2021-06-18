import logo from './logo.svg';
// import './App.css';
import './'
import pins from './pins.json'

function App() {
  console.log(pins)
  return (
    <div className="App">
      <header className="App-header">
        <div>
        {pins ? pins.map((pin) => (
            <div key={pin.id}>
              <img className="pin-image"
                src={pin.images.orig.url}
                alt="pin"
              ></img>
              {pin.description}
            </div>
          )) : null}
        </div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
