import React from 'react';

export default function Reducer() {

  return (
    <>
    <h2>useReducer</h2>
    <p>The useReducer hook is a way to manage state in React. It's similar to the useState hook, but it lets you manage complex state logic in a single location. It accepts a reducer function and returns the current state, as well as a dispatch method for updating the state. 
      
      
      use cases
      It's often used when you have a piece of state that is calculated based on the previous state, or when you have a complex state object with multiple sub-values. 
Instead of using multiple useState hooks for each piece of state, you can use a single useReducer hook and define the logic for how your state should be updated in a reducer function. </p>

<p>Here's how it works: the useReducer hook takes two arguments - a reducer function and an initial state. The reducer function is a pure function that takes in the current state and an action, and returns the next state. The initial state is the starting value for the state.
When the useReducer hook is called, it returns a pair of values - the current state, and a dispatch function. The dispatch function can be called to trigger a state update by passing an action to it. This will cause the reducer function to be called, which will return the next state.
Here's an example of how useReducer might be used:</p>


<img src="../images/Reducer.PNG"/>
<p>In this example, the useReducer hook is used to manage the state of a simple counter. The reducer function takes the current state and an action, and returns the next state based on the action type. The initial state is set to " count: 0 ". The Counter component uses the useReducer hook to get the current state and the dispatch function, and it uses the dispatch function to update the state when the + or - buttons are clicked.</p>
    </>
  );
}
