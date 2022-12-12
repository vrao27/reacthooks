import React from "react";
import userefimage from "../images/userefimage.jpg";

export default function refHook() {
  return (
    <>
      <div className="hook-header">
        <h1>React Hooks</h1>
        <h2>useRef</h2>
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
        <img src={userefimage} alt="" />
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
    </>
  );
}
