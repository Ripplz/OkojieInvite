import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Rsvp from "./rsvp";
import Guests from "./Guests";
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <div className="wrapper">
      <ToastContainer />
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Rsvp} />
          <Route exact path="/guests" component={Guests} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
