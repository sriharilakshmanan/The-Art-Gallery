import React from "react";
import "./App.css";
import TheArtGallery from "./containers/TheArtGallery";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <TheArtGallery />
      </div>
    </BrowserRouter>
  );
}

export default App;
