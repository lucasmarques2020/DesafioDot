import logo from './logo.svg';
import './App.css';
import TelaInicial from './components/telainicial/TelaInicial'
function App() {
  return (
    <div className="App">
      <TelaInicial/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          OLá Lucas Marques Bandeira
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mais informações
        </a>
      </header>
    </div>
  );
}

export default App;
