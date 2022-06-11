import React from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { removegame } from "../redux/GameSlice";
import EditGame from "./EditGame";

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
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button
              variant="dark"
              style={{ backgroundColor: "#676e76", borderColor: "#676e76" }}
              onClick={() => dispatch(removegame({ name: game.name }))}
            >
              {" "}
              x
            </Button>
            <EditGame game={game} />
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Game;
