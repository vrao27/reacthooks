import React from "react";

export default function Effect() {
  return (
    <div className="effect">
      <h1>useEffect</h1>
      <div className="effect-content">
        <p>
          useEffect is a tool that lets us interact with the outside world but
          not affect the rendering of the component that it's in. The useEffect
          hook manages side effects in functional React components. A side
          effect is anything that reaches outside of a React component and has
          no predictable outcome, like fetch requests, directly manipulating the
          DOM or timer functions.
          <br />
          The useEffect provides a way to handle performing these side effects
          in what are otherwise pure React components. Side effects have to be
          separated from the main rendering process. That means if we need to
          perform a side effect, it has to be done after the component renders.
        </p>
        <br />
        <img src="./images/homeImage" alt="use-state-img" />
        <h2>Common mistakes with useEffect </h2>
        <p>
          A common mistake with useEffect is to not provide the dependencies
          array at all and only provide a function to useEffect. This will make
          it run after every render and can lead to problems when attempting to
          update state within the useEffect hook. If there’s no dependencies
          provided and you are setting a piece of local state when the state is
          updated, the default behavior of React is to re-render the component
          and therefore, since useEffect runs after every single render without
          the dependencies array, it triggers an infinite loop. If you are
          updating state within your useEffect, make sure to provide an empty
          dependencies array. This will cause the effect function to only run
          once after the component has rendered the first time.
        </p>
        <h2>Unmounting</h2>
        <p>
          The final part of performing side effects properly is the effect
          cleanup function. This shuts off the side effects. The side effect
          cleanup is only required when you need to stop a repeated side effect
          when your component unmounts. To use the cleanup function, we need to
          return a function from within the useEffect function. The cleanup
          function will be called when the component is unmounted. A common
          example of a component being unmounted is going to a new page or a new
          route in our application where the component is no longer rendered.{" "}
        </p>
      </div>
    </div>
  );
}
