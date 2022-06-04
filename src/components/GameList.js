import React from "react";
import { useSelector } from "react-redux";
import AddGame from "./AddGame";
import Game from "./Game";

function GameList({ text }) {
  const games = useSelector((state) => state.game.games);
  console.log(games);
  return (
    <div style={{ marginTop: "20px" }}>
      <AddGame />
      <div className="games">
        {games
          .filter((el) => el.name.toUpperCase().includes(text.toUpperCase()))
          .map((el) => <Game game={el} />)
          .reverse()}
      </div>
    </div>
  );
}

export default GameList;
