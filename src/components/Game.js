import React from "react";
import { Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { removegame } from "../redux/GameSlice";

const Game = ({ game }) => {
  const dispatch = useDispatch();
  return (
    <div className="game">
      <Card style={{ width: "18rem", height: "500px" }}>
        <Card.Img
          variant="top"
          src={game.posterUrl}
          style={{ width: "18rem", height: "200px" }}
        />
        <Card.Body className="gamebod">
          <Card.Title className="title-container">{game.name}</Card.Title>
          <Card.Text className="script">{game.description}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Game;
