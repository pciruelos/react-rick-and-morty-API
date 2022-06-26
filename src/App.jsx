import React from "react";
import "./components/CharacterCard";
import "./components/CharacterList";
import CharacterList from "./components/CharacterList";

const App = () => {
  return (
    <div className="bg-dark text-white">
      <h1 className="text-center display-1 py-4">Rick and morty papa</h1>
      <CharacterList />
    </div>
  );
};

export default App;
