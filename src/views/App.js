import logo from './logo.svg';
import MyExam from './Example/MyExam';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello!
        </p>
        <MyExam />
      </header>
    </div>
  );
}

export default App;
