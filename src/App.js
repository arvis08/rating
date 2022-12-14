import React from "react";
import "./App.css";

import Rating from "./Rating";
function App() {
  return (
    <>
      <div className="container">
        <p className="App"> please rate your experience</p>
        <br />

        <p className="App">Responsiveness</p>
        <div className="App">
          <Rating key={1} />
        </div>
        <br />

        <p className="App">Competency in advising right solutions</p>
        <div className="App">
          <Rating key={2} />
        </div>
        <br />
        
        <p className="App">Trustworthiness</p>
        <div className="App">
          <Rating key={3} />
        </div>

        <br />
        <p className="App">Customer service and support</p>
        <div className="App">
          <Rating key={4} />
        </div>

       
      </div>

  
    </>
  );
}

export default App;
