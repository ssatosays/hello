import logo from './url-info.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Sota Sato<br />
          <small>@ssatosays</small>
        </p>
        <p>
          Check out the readme or the links below.
        </p>
        <a
          className="App-link"
          href="https://github.com/ssatosays/hello/blob/master/README.md"
          target="_blank"
          rel="noopener noreferrer"
        >
          README.md
        </a>
        <a
          className="App-link"
          href="https://github.com/ssatosays"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </header>
    </div>
  );
}

export default App;
