import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { editgame } from "../redux/GameSlice";

function EditGame({ game }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [gameEdited, setgameEdited] = useState({
    name: "",
    posterUrl: "",
    description: "",
  });

  const dispatch = useDispatch();

  return (
    <div>
      <>
        <Button
          variant="dark"
          onClick={handleShow}
          style={{ backgroundColor: "#676e76", borderColor: "#676e76" }}
        >
          edit
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Game</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Game Name</Form.Label>
              <Form.Control
                type="text"
                placeholder={game.name}
                onChange={(e) =>
                  setgameEdited({ ...gameEdited, name: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Game posterUrl</Form.Label>
              <Form.Control
                type="text"
                placeholder={game.posterUrl}
                onChange={(e) =>
                  setgameEdited({ ...gameEdited, posterUrl: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Game Description</Form.Label>
              <Form.Control
                type="text"
                placeholder={game.description}
                onChange={(e) =>
                  setgameEdited({ ...gameEdited, description: e.target.value })
                }
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button
              variant="primary"
              onClick={() =>
                dispatch(editgame({ name: game.name, gameEdited }))
              }
            >
              Edit
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </div>
  );
}

export default EditGame;
