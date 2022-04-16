import React from "react";
import emojipedia from "../emojipedia";
import Entry from "./Entry";

function createEmoji(props) {
  return (
    <Entry
      id={props.id}
      emoji={props.emoji}
      name={props.name}
      meaning={props.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      {emojipedia.map(createEmoji)}
    </div>
  );
}

export default App;
