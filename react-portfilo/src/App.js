import React from "react";
import Header from "./components/Header";
import Section from "./components/AboutMe";
import Navbar from "./components/Navbar";

import './App.scss';
import { Routes, Route, Link} from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Section />
    </div>
  );
}

export default App;
