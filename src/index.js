import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Callback from './components/Callback'
import Reducer from './components/Reducer'
import State from './components/State'
import Effect from './components/Effect'
import Ref from './components/Ref'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route index element={<App />}/>
      <Route path="useState" element={<State />} />
      <Route path="useEffect" element={<Effect />} />
      <Route path="useRef" element={<Ref />}/>
        <Route path="useCallback" element={<Callback />} />
        <Route path="useReducer" element={<Reducer />} />
      
    </Routes>
  </BrowserRouter>
);



