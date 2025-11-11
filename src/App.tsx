import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return <h1 className="text-4xl font-bold">{import.meta.env.VITE_MODE}</h1>;
}

export default App;
