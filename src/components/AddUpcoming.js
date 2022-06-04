import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
function AddUpcoming() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div> <>
    <Button variant="dark" onClick={handleShow}>
      +
    </Button>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add Upcoming </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Game Name</Form.Label>
          <Form.Control type="text" placeholder="Enter game" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Game Description</Form.Label>
          <Form.Control type="text" placeholder="Enter game description" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Game posterUrl</Form.Label>
          <Form.Control type="text" placeholder="Enter game image" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>releaseDate</Form.Label>
          <Form.Control type="text" placeholder="Enter game" />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  </></div>
  )
}

export default AddUpcoming