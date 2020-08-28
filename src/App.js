import React from "react";
import logo from "./assests/download.png";
import "./App.scss";
import { Form, Button } from 'react-bootstrap';
import {LoginForm } from './shared';

function App() {
  return (
        <div className="Root">
          <div className="App">
            <div className="RegisterModal">
                <div className="details-box">
                <img src={logo} />
               <div className="heading">
                 <h1>Join the largest art community in the world</h1>
                <p>Explore and discover art, become a better artist, connect with others over mutual hobbies, or buy and sell work – you can do it all here.</p>
              </div>
               </div>
          <div className="form-box">
                   <LoginForm/>
                </div>
            </div>
            </div>
         </div>
  );
}

export default App;
