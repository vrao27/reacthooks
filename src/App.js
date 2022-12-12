import "./App.css";
import homeImage from "./images/hooks.jpg";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <h1>5 cool React Hooks you need to learn before you die</h1>
      <div className="home-content">
        <p>
          React hooks are a new feature in React 16.8 that allow you to use
          state and other React features without writing a class. Hooks are
          functions that let you "hook into" React state and lifecycle features
          from function components. They were designed to make it easier to
          write complex components that use state and lifecycle methods, without
          the need to write a class.
        </p>
        <br />
        <img src={homeImage} alt="use-state-img" />
        <p>
          React provides several built-in hooks, including useState for adding
          state to components, useEffect for running side effects in function
          components, and useContext for accessing React context in function
          components. You can also create your own custom hooks to reuse
          stateful logic between components.
        </p>
      </div>
      <div id="buttoncontainer">
        <button className="button" onClick={() => navigate("/usestate")}>
          useState
        </button>
        <button className="button" onClick={() => navigate("/useeffect")}>
          useEffect
        </button>
        <button className="button" onClick={() => navigate("/useref")}>
          useRef
        </button>
        <button className="button" onClick={() => navigate("/usereducer")}>
          useReducer
        </button>
        <button className="button" onClick={() => navigate("/usecallback")}>
          useCallback
        </button>
      </div>
    </div>
  );
}

export default App;
