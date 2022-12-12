import React from "react";
import userefimage from "../images/userefimage.jpg";
import { useNavigate } from "react-router-dom";

export default function Ref() {
  const navigate = useNavigate();

  return (
    <div className="hook-body">
      <div className="hook-header">
        <h1>useRef</h1>
      </div>
      <div className="hook-content">
        <p>
          The useRef hook in React is a way to create a reference to a DOM
          element or a React class instance. This reference can be used to
          access the properties of the element or the instance, such as its
          value or checked state in the case of a form input, or to call its
          methods.
        </p>
        <br />
        <p>
          Here's an example of how you might use the useRef hook to store a
          reference to a text input element:
        </p>
        <br />
        <img src={userefimage} alt="useref-img" />
        <br />
        <p>
          In this example, we create a useRef hook and store it in the inputRef
          variable. We then assign this hook as the ref attribute for our input
          element. This allows us to access the input element's properties and
          methods through the current property of the inputRef hook.
          <br />
          When the user clicks the Submit button, we access the value property
          of the input element through inputRef.current.value and do something
          with it.
        </p>
      </div>
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
}
