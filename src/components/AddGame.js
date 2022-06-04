import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addgame } from "../redux/GameSlice";

const AddGame = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [newgame, setnewgame] = useState({
    name: "",
    posterUrl: "",
    description: "",
  });

  const dispatch = useDispatch();

  return (
    <div>
      <>
        <Button variant="dark" onClick={handleShow}>
          +
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Game</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Game Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter game"
                onchange={(e) =>
                  setnewgame({ ...newgame, name: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Game posterUrl</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter game image"
                onchange={(e) =>
                  setnewgame({ ...newgame, posterUrl: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Game Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter game description"
                onchange={(e) =>
                  setnewgame({ ...newgame, description: e.target.value })
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
              onClick={() => dispatch(addgame( newgame))}
            >
              Add
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </div>
  );
};

export default AddGame;
