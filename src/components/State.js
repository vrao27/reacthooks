import React from "react";
import homeImage from "../images/homeImage.jpg";
import { useNavigate } from "react-router-dom";

export default function State() {
  const navigate = useNavigate();

  return (
    <div className="hook-body">
      <div className="hook-header">
        <h1>useState</h1>
      </div>
      <div className="hook-content">
        <p>
          useState is one of many hooks in react. Hooks are build in functions
          in react, which help us to work with react. The useState hook allows
          us to create state variables and to access and render them in react.
          When calling useState() into our component, it returns two items. A
          variable with initial value and a setter Function with which we can
          render the initial value. In order to have acess to the items that
          calling useState() returns, we make an array destruction. It is
          important to know that the setterFunction triggers a re-render in
          react. Therefore we have to avoid to work with the setterFunction in
          the global scope. Working with the setterFunction in the global scope
          would cause an infinite loop. In order to avoid an infinite loop, we
          can wrap the setterFunction into the scope of another function. In the
          example beneath we wrapped the setter Function into an anonymous
          function.
        </p>
        <p>
          Here's an example of how you might use the useState hook to increment
          a number through a counter:
        </p>
        <br />
        <img src={homeImage} alt="" />
        <br />
        <p>
          In this example, the useState hook is used to add state to the
          MyComponent function component. The useState hook returns an array
          with two elements: the current value of the state, and a function to
          update the state. In this case, the count variable contains the
          current value of the state, and the setCount function is used to
          update the state by incrementing the count by 1 when the button is
          clicked.
        </p>
      </div>
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
}
