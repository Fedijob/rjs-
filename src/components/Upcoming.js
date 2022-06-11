import React from "react";
import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import "../App.css";
import AddUpcoming from "./AddUpcoming";

function Upcoming({ text }) {
  const upgames = useSelector((state) => state.upcoming.upgames);
  console.log(upgames);
  return (
    <div style={{ marginTop: "20px" }}>
      <div className="games">
        {upgames
          .filter((el) => el.name.toUpperCase().includes(text.toUpperCase()))
          .map((el) => (
            <div className="game">
              <Card style={{ width: "18rem", height: "500px" }}>
                <Card.Img
                  variant="top"
                  src={el.posterUrl}
                  style={{ width: "18rem", height: "200px" }}
                />
                <Card.Body className="gamebod">
                  <Card.Title className="title-container">{el.name}</Card.Title>
                  <Card.Text className="script">{el.description}</Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))}{" "}
      </div>
    </div>
  );
}

export default Upcoming;
