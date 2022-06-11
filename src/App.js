import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { useEffect, useState } from "react";
import Footer from "./components/Footer";

import Navb from "./components/Navb";
import Upcoming from "./components/Upcoming";
import { Route, Routes } from "react-router-dom";
import GameList from "./components/GameList";

import About from "./components/About";
import NewHome from "./components/NewHome";

function App() {
  const [text, setText] = useState("");

  return (
    <div className="App">
      <Navb setText={setText} />

      <Routes>
        <Route path="/" element={<NewHome />} />
        <Route path="/games" element={<GameList text={text} />} />
        <Route path="/upcoming" element={<Upcoming text={text} />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
