import "./App.css";
import homeImage from "./images/homeImage.jpg";
import {Link, NavLink} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <h1>React Hooks</h1>
      <div className="home-content">
        <p>
          React hooks are a new feature in React 16.8 that allow you to use
          state and other React features without writing a class. Hooks are
          functions that let you "hook into" React state and lifecycle features
          from function components. They were designed to make it easier to
          write complex components that use state and lifecycle methods, without
          the need to write a class.
        </p>
        <nav>
      <ul>
        <li><NavLink to="/" end>Home</NavLink></li>
        <li><NavLink to="usestate">useState</NavLink></li>
        <li><Link to="useeffect">useEffect</Link></li>
        <li><Link to="useref">useRef</Link></li>
        <li><Link to="usecallback">useCallback</Link></li>
        <li><Link to="usereducer">useReducer</Link></li>
      </ul>
     
    </nav>
        <br />
        <img src={homeImage} alt="use-state-img" />
        <p>
          In this example, the useState hook is used to add state to the
          MyComponent function component. The useState hook returns an array
          with two elements: the current value of the state, and a function to
          update the state. In this case, the count variable contains the
          current value of the state, and the setCount function is used to
          update the state by incrementing the count by 1 when the button is
          clicked. React provides several built-in hooks, including useState for
          adding state to components, useEffect for running side effects in
          function components, and useContext for accessing React context in
          function components. You can also create your own custom hooks to
          reuse stateful logic between components.
        </p>
      </div>
    </div>
  );
}

export default App;
