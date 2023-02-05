import "./App.css";
import reactLogo from "../img/react-logo.svg";

const App = () => {
  return (
    <div className="app">
      <header className="app-header">
        <h1>This is a React app without Create React App</h1>
        <img
          src={reactLogo}
          height="400"
          width="460"
          className="app-logo"
          alt="A spinning atom"
        />
      </header>
    </div>
  );
};

export default App;
