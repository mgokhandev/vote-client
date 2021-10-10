import "./App.css";
import React from "react";
import Vote from "./components/Vote";
import { useEffect, useState } from "react";
import { init, subscribe } from "./socketApi";
import VerticalBar from "./components/Chart";

function App() {
  const [activeVoteOne, setActiveVoteOne] = useState(0);
  const [activeVoteTwo, setActiveVoteTwo] = useState(0);

  useEffect(() => {
    init();
  }, []);

  useEffect(() => {
    subscribe("lastVoteOne", (voteOne) => {
      setActiveVoteOne(voteOne);
    });
  }, []);

  useEffect(() => {
    subscribe("lastVoteTwo", (voteTwo) => {
      setActiveVoteTwo(voteTwo);
    });
  }, []);

  return (
    <div className="App">
      <Vote activeVoteOne={activeVoteOne} activeVoteTwo={activeVoteTwo} />
      <VerticalBar
        activeVoteOne={activeVoteOne}
        activeVoteTwo={activeVoteTwo}
      />
    </div>
  );
}

export default App;
