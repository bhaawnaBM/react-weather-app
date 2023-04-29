import "./App.css";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          This project was coded by Bhaawna M and is
          <a
            href="https://github.com/bhaawnaBM/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            open-sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}
