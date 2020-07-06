import React, {useState} from 'react';
import PoseNet from "react-posenet";
import './App.css';

function App() {
  const [posesString, setPosesString] = useState([])

  return (
    <div className="App">
        <h1>PoseNet</h1>
        <PoseNet inferenceConfig={{ decodingMethod: "single-person" }}
                 onEstimate={poses => {setPosesString(JSON.stringify(poses))}}/>
        <p>{posesString}</p>
    </div>
  );
}

export default App;
