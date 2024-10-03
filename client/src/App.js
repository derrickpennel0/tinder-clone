import React from "react";
import "./App.css";
import Header from "./components/header";
import TinderCards from "./components/tinder-cards";
import SwipeButtons from "./components/swipe-buttons";

function App() {
  return (
    <div className="app">
      {/* header component here  */}
      <Header />
      {/* tinder cards here  */}
      <TinderCards />
      {/* swipe buttons here   */}
      <SwipeButtons />
    </div>
  );
}

export default App;
