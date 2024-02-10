import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const NameModal = ({ show, onHide, onSubmit }) => {
  const [userName, setuserName] = useState('');

  // Reset the input value when the modal is shown
  const handleModalShow = () => {
    setuserName('');
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(userName);
    onHide();
  };

  const handleNameChange = (e) => {
    setuserName(e.target.value);
  };

  return (
    <Modal show={show} onHide={onHide} onShow={handleModalShow} centered>
      <Modal.Header closeButton>
        <Modal.Title>User</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleFormSubmit}>
          <Form.Group controlId="formUserName" className="mb-3">
            <Form.Control
              type="text"
              placeholder="Please enter your name"
              className="mb-2"
              value={userName}
              onChange={handleNameChange}
              autoComplete="off"
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="mb-2">
            Enter
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default NameModal;
