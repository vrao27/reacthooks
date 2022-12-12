import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Callback from "./components/Callback";
import Reducer from "./components/Reducer";
import State from "./components/State";
import Effect from "./components/Effect";
import Ref from "./components/Ref";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route index element={<App />} />
      <Route path="usestate" element={<State />} />
      <Route path="useeffect" element={<Effect />} />
      <Route path="useref" element={<Ref />} />
      <Route path="usecallback" element={<Callback />} />
      <Route path="usereducer" element={<Reducer />} />
    </Routes>
  </BrowserRouter>
);
